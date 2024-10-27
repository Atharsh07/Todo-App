const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email: {type: String, unique: true },
    password: String,
    name: String
})

const todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

const userModel = mongoose.model('users', User);
const todoModel = mongoose.model('todos', todo);

module.exports = {
    userModel : userModel,
    todoModel : todoModel
};
