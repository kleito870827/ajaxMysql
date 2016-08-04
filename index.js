/*connection MYSQL*/
const mysql = require('mysql');
const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'todoapp',
  host: 'localhost'
});


const express = require('express');
const app = express();

/*MIDDLEWARE*/
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  next();
});



/* ROUTES*/
app.get('/', (req,res) => res.end("hi"));

app.get('/tasks', (req,res) => {
  connection.query('SELECT * FROM tasks', (err, rows)=>{
    if(err) res.end('error in get route for tasks');
    else res.end(JSON.stringify(rows));
  });
});

 app.post('/tasks/:desc/:uid/:status', (req, res)=> {
   connection.query(`INSERT INTO tasks (description, uid, status)
  VALUES ('${req.params.desc}', '${req.params.uid}', '${req.params.status}')`,
 (err, dbres)=>{
   if (err) res.end('error in posting task route');
   else res.json(dbres);
 });
 });

 app.put('/tasks/:id/:newstatus', (req, res)=> {
   connection.query(`UPDATE tasks set status = '${req.params.newstatus}' WHERE id = '${req.params.id}'`, (err, dbres) =>{
     if (err) res.end('error in posting task route');
     else res.json(dbres);
   });
 });

 app.delete('/tasks/:id', (req, res)=> {
   connection.query(`DELETE FROM tasks WHERE id= '${req.params.id}'`,
   (err, dbres) =>{
     if (err) res.end('error in posting task route');
     else res.json(dbres);
   });
 });

app.listen(9999, ()=> console.log("Server listening at port 9999"));

/*post for mysql*/
/*$.ajax({
url: 'http://localhost:9999/tasks/tre/7/trsdf',
success: function(resp,txt,xhr){
console.log(resp);
},
method: 'POST' o method: 'PUT' o method: 'DELETE' omethod: 'GET'
})

$.ajax({
url: 'http://localhost:9999/tasks',
success: function(resp,txt,xhr){
console.log(resp);
}
})*/
