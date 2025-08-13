const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
const PORT = 8000;

// Allow requests from React app
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));

mongoose.connect('mongodb://localhost:27017/Practice')
.then(() => {console.log("database connected.")})
.catch(() => {console.log('error connecting database.')})

const mySchema = new mongoose.Schema(
     {
    fname : String ,
    mname : String , 
    lname : String  , 
    age : Number , 
    mobile : Number
}
);

const myModel = mongoose.model('details' , mySchema);

app.post('/addDetails' , async(req,res) => {
    const {fname , mname , lname , age , mobile} = req.body;

    try {
        const newModel = new myModel({fname , mname , lname , age , mobile});
        const saveModel = await newModel.save();
        res.status(200).json(saveModel);
        
    } catch (error) {
       res.status(400).json("Data not saved !!");
        console.log("error");
    }
})

app.get('/getDetails', async(req,res) =>{
    try {
        const data = await myModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json("cannot get data")
    }

})

app.listen(PORT , () => console.log(`server is running on port :  ${PORT}`))