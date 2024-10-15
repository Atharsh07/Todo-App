const express = require('express')
// const jwt = require('jsonwebtoken')
const app = express()
// const JWT_SEC = "atharshsai"

// app.use(express.json())

// const users = []

// app.post('/signup', (req, res) => {
//     const username = req.body.username
//     const password = req.body.password
//     users.push({
//         username: username,
//         password: password
//     })
//     res.send({message: "your signed in"})
// })

// app.post("/signin", (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     const user = users.find(user => user.username === username && user.password === password);
//     if (user) {
//         const token = jwt.sign({
//             username: user.username
//         }, JWT_SEC);
//         user.token = token;
//         res.send({
//             token
//         })
//         console.log(users);
//     } else {
//         res.status(403).send({
//             message: "Invalid username or password"
//         })
//     }
// });

// // app.get("/me", (req, res) => {
// //     const token = req.headers.token;
// //     const userDetails = jwt.verify(token, JWT_SEC);

// //     const username =  userDetails.username;
// //     const user = users.find(user => user.username === username);

// //     if (user) {
// //         res.send({
// //             username: user.username
// //         })
// //     } else {
// //         res.status(401).send({
// //             message: "Unauthorized"
// //         })
// //     }
// // })

// // using middleware function

// function auth(req, res, next) {
//     const token = req.headers.token
//     if(token){
//         jwt.verify(token, JWT_SEC, (err, decoded) => {
//             if(err){
//                 res.send({message: "Unauthorized"})
//             }else{
//                 req.user = decoded
//                 next()
//             }
//         })
//     }else{
//         res.send({message: "Unauthorized"})
//     }
// }

// app.get('/get', auth, (req, res) => {
//     const user = req.user
//     res.send({
//         username: user.username,
//     })
// })

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/app.html");
});

app.listen(3000)
