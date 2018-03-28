import { 
        addNewEmp, 
        getUsers, 
        getUserByUserName, 
        updateEmp, 
        deleteEmp
    } from "../controllers/controller";

const routes= (app) => {
    app.route('/users')

    //Getting all users 
    .get((req,res,next) => {
        // Middle ware
        console.log(`Request From: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    },getUsers)
    
    //POST endpoint
    //.post(addNewEmp);

    
    app.route('/users/:userName')
    //Get Request for particular user
    .get(getUserByUserName)
    .post(addNewEmp)
    // 
    .put(updateEmp)
    
    .delete(deleteEmp);
    

}


export default routes;