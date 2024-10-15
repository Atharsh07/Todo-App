const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const JWT_SECRET = "ramdomharkiratilovekiara";
app.use(express.json())

const users = []

app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    users.push({
        username: username,
        password: password
    })
    res.send({message: "your signed in"})
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);
        user.token = token;
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

app.get('/me', (req, res) => {
    const token = req.headers.token
    const userinfodecoded = jwt.verify(token, JWT_SECRET)
    const username = userinfodecoded.username
    const user = users.find((user) => username == user.username)
    if(user){
        res.send({message: user.username})
    }else{
        res.send({mesage: 'invalid token or auth'})
    }
})

app.listen(3000)
