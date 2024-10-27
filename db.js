const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    name: String,
    password: String,
    email: String
})

const todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

