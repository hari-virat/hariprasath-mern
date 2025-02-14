const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();
const app = express();
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const UserModel = require("./modals/User");

app.use(cors());

app.use(express.json());


dotenv.config();


mongoose.set('strictQuery', false);


mongoose.connect("mongodb://127.0.0.1:27017/hari-rooms"
).then(() => console.log('connected successfully the database'))
    .catch((err) => { console.error(err); });
    

app.post("/payment", (req, res) => {
    console.log(req.body);
    res.send("working properly");
});


app.post("/",async (req,res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name+" "+email+" "+password)
        const existingUser = await UserModel.findOne({ email });
        console.log(existingUser)
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ name, email, password: hashedPassword });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
       

    } catch (error) {
        res.status(500).json({ error: error.message });

    }

});


app.post("/login", async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await UserModel.findOne({email});
        if (user){
            const passwordMatch = await bcrypt.compare(password, user.password);
            if(passwordMatch){
                res.json("success");
            }
            else{
                res.status(401).json("password does not match");
            }
        }else{
            res.status(401).json("no record found");
        }
    }catch(error){
        res.status(500).json({error:error.message})
    }
    
});





app.listen(5000, () => {
    console.log("server has been started in 5000")
})
