/* Created on : 03/28/2018  */

import { 
        addNewEmp, 
        getUsers, 
        getUserByUserName, 
        updateEmp, 
        deleteEmp
    } from "../controllers/controller";

const routes= (app) => {
   
    app.route('/users')
    // for getting all users info
    .get(getUsers)
   
    
    app.route('/users/:userName')
    //Get Request for particular user
    .get(getUserByUserName)
    // Adding a New User by POST
    .post(addNewEmp)
    // Updating User by PUT 
    .put(updateEmp)
    // Deleting User by userid
    .delete(deleteEmp);
    

}


export default routes;