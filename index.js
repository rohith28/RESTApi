import express from 'express';
import routes from './src/routes/router';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
const PORT = 3000;


//Mongoose connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/db',{
});

//Body Parser
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

routes(app);

app.get('/',(req,res) => {
    res.send(`Node and Express serve is running on Port ${PORT}`);
});


app.listen(PORT,()=>
console.log(`Your server is running on PORT ${PORT}`)
);