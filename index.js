const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => { console.log("db connected"); })
    .catch(() => { console.log("db not connected"); });

const mySchema = new mongoose.Schema(
    {
    randomName : String
    }
);

const User = mongoose.model("user", mySchema);
app.post("/login",async(req,res)=>{
    const randomName = req.body.randomName;
    const details = {
        randomName:randomName
    }
    const userDetails = new user(details);
    const response = await userDetails.save()
    res.send('this is it ${response}');
})

app.get("/fetch", (req, res) => {
    const username = req.query.username;
    const email = req.query.email;
    const phone = req.query.phone;

    User.find({ user: username, email: email, phone: phone })
        .then(() => { res.send("success"); })
        .catch(() => { res.send("failed"); });
});

app.listen(3002,()=>{
    console.log("server has started")
})