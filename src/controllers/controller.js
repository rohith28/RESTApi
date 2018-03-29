/* Created on : 03/28/2018  */
import mongoose from 'mongoose';
import { empSchema } from '../model/model';

const empCollection = mongoose.model('empSchema', empSchema);

// Adding the new employees
export const addNewEmp = (req,res) => {
    console.log(req.body);
    req.body.userName = req.params.userName;
    let newEmp = new empCollection(req.body);

    newEmp.save((err, emp)=>{
        if(err){

            res.status(409);
            res.send('User already exist');
        }
        res.json(emp);
    });

};    


// Get all users
export const getUsers  = (req,res) => {
    empCollection.find({}, (err, emp) => {
        if(err){
            res.send(err);
        }
        res.json(emp);
    });
};

// Getting User by UserName
export const getUserByUserName  = (req,res) => {
    
    empCollection.find({ userName: req.params.userName}, (err,emp) =>{
    if(err){
        
        res.status(500).json(err);
    }
    else if(JSON.stringify(emp) === '[]'){
        //res.statusCode = 404;
        res.status(404).json('Not Found');
    }
    else{
        res.status(200).json(emp);
    }
    
});
}


// updating the employee
export const updateEmp = (req,res) => {
    empCollection.findOneAndUpdate({ userName: req.params.userName}, req.body,{ new : true},(err,emp) =>{
        if(err){
            res.send(err);
        }
       
        res.json(emp); 
    });
}


// Delete Employee
export const deleteEmp = (req,res) =>{
   
    
    
    empCollection.find({ userName: req.params.userName}, (err,emp) =>{
        if(err){
            
            res.status(500).json(err);
        }
        else if(JSON.stringify(emp) === '[]'){
            //res.statusCode = 404;
            res.status(404).json('Not Found');
        }
        else{
            empCollection.remove({userName: req.params.userName},(err,emp)=>{
                if(err){
                    res.status(404).json(err);
                }
                else{
                    res.json('Employee deleted');
                }
        
            });
        }
        
    });
        
    
   
}