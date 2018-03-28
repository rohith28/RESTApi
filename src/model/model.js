import mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const empSchema = new Schema({
    userName : {
        type: String,
        required : 'Enter User Name',
        unique : true
    },
    displayName :{
        type : String,
        required : 'Enter Display Name'
    },
    department :{
        type: String
    },
    company :{
        type : String,
        default : 'MathWorks'
    }
});

