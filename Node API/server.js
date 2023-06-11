const express =require('express')
const mongoose=require('mongoose')
const app= express()
const cors = require('cors');
const Product=require('./models/Signin')
const port=8000

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:'false'}))

app.get('/',(req,res) => {
    res.send("Hello NODE dreama API")
})

//login
app.post('/signin/:username',async(req,res)=>{
    try {
        const {username}=req.params
        const signin=await Product.find({username});
        if(!signin){
            return res.status(404).json({message:'Cannot Find account with username ${username}'})
            }
        res.status(200).json(signin)
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
})
//Signin
app.post('/signin',async(req,res)=>{
    try {
        const signin=await Product.create(req.body)
        res.status(200).json(signin);
        
    } catch (error) {
       console.log(error.message);
       res.status(500).json({message: error.message}) 
    }
})

//homepage


mongoose.connect('mongodb+srv://GetPass:getpass@getpass.wlzryhy.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    app.listen(port,()=>{
        console.log('Connected to MongoDB')
        console.log('Node API is running.')
    }) 
})
.catch(()=>{
    console.error('Didnt connect to Mongo DB')
})

