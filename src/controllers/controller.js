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
            res.send('User already exist'+ err);
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
        res.status(404).json();
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
    empCollection.findByIdAndRemove({userName: req.params.userName},(err)=>{
        if(err){
            res.status(404);
            res.send('Not found');
        }
        res.json('Employee deletedasdas');
    })
}


/*const isEmpty = (obj) => {
  //  console.log(obj);
    if (obj === null ||
        obj === undefined ||
        Array.isArray(obj) ||
        typeof obj !== 'object'
    ) {
        return true;
    }
    return Object.getOwnPropertyNames(obj).length === 0 ? true : false;
};*/