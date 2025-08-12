const express = require('express');
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
const PORT = 8000;


mongoose.connect('mongodb://localhost:27017/Practice')
.then(()=>{console.log('Database Connected....')})
.catch((err)=>{console.log('Error connecting database.')})

const mySchema = new mongoose.Schema({
    id : Number ,
    name : String ,
    age : Number ,
    email : String ,
    salary : Number
})

const myModel = mongoose.model('employees',mySchema);

//Post Request
app.post('/addEmployee' , async(req,res)=>{
    const {id , name , age , email ,salary} = req.body;

    try {
        const newModel = new myModel({id , name , age , email ,salary});
        const saveModel = await newModel.save();
        res.status(200).json(saveModel);
        
    } catch (error) {
        res.status(400).json({err : "Employee details not saved..."})
    }
})

//Get All Employess Request
app.get('/getAllEmployees' , async(req,res) =>{
    try {
        const data = await myModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({err : "Employees not fetched.."})
    }
})

//Delete Request
app.delete('/deleteEmployee/:name' , async(req,res)=>{
   try {
     const data = await myModel.deleteOne({name : req.params.name});

    if(data.deletedCount==0){
        res.status(404).json("data not deleted");
    }else{
          res.status(200).json(data);
    }

   } catch (error) {
    console.log(error);
   }
})

//Update Request
app.put('/updateEmployee/:id' , async(req,res)=>{
    const {name} = req.body;

    try {
        const updateModel = await myModel.updateOne({id:req.params.id} , {$set:{name}});
        if(updateModel.modifiedCount == 0){
            res.status(404).json("data not updated");
        }else{
            res.status(200).json(updateModel);
        }
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT , () => console.log(`Server started at port : ${PORT}`))