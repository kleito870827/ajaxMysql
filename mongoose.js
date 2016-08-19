const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/task')
mongoose.Promise = global.Promise
const Schema = mongoose.Schema
const db = mongoose.connection
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-Parser')

db.on('error', function(){
  console.log('can not connect to DB');
})

db.once('open', function(){
  console.log('Connection to DB');
})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const taskSchema = Schema ({
  description: String,
  uid: {type: Number, ref: 'User'},
  status: String,
})

const userSchema = Schema({
  userName: String,
  _id: Number
})



const User = mongoose.model('User', userSchema)
const Task = mongoose.model('task', taskSchema)

app.post('/users', (req, res)=>{
  const newUser = new User(req.body)
  newUser.save()
  .then(saveUser=>{
    res.json(saveUser)
    console.log(`The task ${saveUser.userName} is saved!`);
  })
  .catch(e=> console.log(e.message))
})
app.get('/users', (req, res)=>{
  User.find()
    .then(user=> res.json(user))
    .catch(e=>console.log(e.message))
})



app.post('/tasks', (req, res)=>{
  const newTask = new Task(req.body)

  newTask.save()
  .then(saveTask=>{
    res.json(saveTask)
    console.log(`The task ${saveTask.description} ${req.body} is saved!`);
  })
  .catch(e=> console.log(e.toString()))
})

app.get('/tasks', (req, res)=>{
  Task.find()
    .populate('uid')
    .then(task=> res.json(task))
    .catch(e=>console.log(e.message))
})

app.put('/tasks/:_id', (req, res)=>{
  Task.findById(req.params._id)
  .then(taskDB=>{
    console.log(taskDB)
    Object.assign(taskDB, req.body)
    console.log(taskDB)
    taskDB.save()
    .then(saveTask => console.log(`Task ${saveTask.req.body} saved`))
    .catch(e=>console.log(e.message))
  })
})

app.delete('/tasks/:_id', (req, res)=>{
  Task.findByIdAndRemove(req.params._id)
    .then(deleteTask => console.log(`You have deleted: ${deleteTask}`))
    .catch(e=>console.log(e.message))
})


app.listen(3000, ()=> console.log('listening on 3000'))
