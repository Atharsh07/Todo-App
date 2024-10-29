const express = require('express')
const app = express();
const {userModel, todoModel} = require('./db.js');
app.use(express.json());
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const JWT_SECERT = "aashu2004";
mongoose.connect('mongodb+srv://atharsh0425:nNYMz0dBaxtCtCQI@cluster0.u66eo.mongodb.net/todo-app-database')
const bcrypt = require('bcrypt');

app.post('/sign-up', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const hashedPassword =  await bcrypt.hash(password, 5)
    await userModel.create({
        email: email,
        password: hashedPassword,
        name: name
    })

    res.json({
        message: "Yor are Signed up"
    })
});
app.post('/sign-in', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userModel.findOne({
        email: email
    })
    if(!user){
        res.status(403).json({
            message: "User does not exit in our db"
        })
        return
    }
    const passwordMatched = await bcrypt.compare(password, user.password)
    if(passwordMatched){ const token = jwt.sign({
        id: user._id.toString(),
    }, JWT_SECERT)
    res.json ({message: token})
    }else{res.status(403).json({message:"your email or password is incorrect"})}
});
app.post('/todo', auth , function (req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;
    todoModel.create({
        userId,
        title,
        done
    })
    res.json({
        message: "todo created"
    })
});
app.post('/todos', auth, async function (req, res) {
    const userId = req.userId;
    const todos = await todoModel.find({
        userId
    });
    res.json({
        todos
    })
});

function auth(req, res, next) {
    const token = req.headers.token;
    const response = jwt.verify(token, JWT_SECERT);
    if(response){
        req.userId = response.id;
        next();
    }else{res.json({message: "incorrect credentials"})}
}


app.listen(3000);
// mongodb+srv://atharsh0425:<db_password>@cluster0.u66eo.mongodb.net/
