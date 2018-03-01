const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session')
const user = require('./user_controller');
const song = require('./song_controller');
const middleware = require('./middleware');

require('dotenv').config();

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance);
}).catch(err=>console.error(err))


const app=express(); 
app.use(bodyParser.json());
app.use(cors());


// -----------------USER-----------------
const userAPIurl = '/api/users'

app.post(`${userAPIurl}/login`, user.get); //works - front & back
app.post(`${userAPIurl}/create`, user.create); //works - front & back
app.put(`${userAPIurl}/:id`, middleware, user.update);  
app.delete(`${userAPIurl}/logout`, user.logout);
app.get(`${userAPIurl}/connect`, user.connect);

// -----------------ENTRIES-----------------
const songAPIurl = '/api/songs'

app.get(`${songAPIurl}/get`, song.getAll); //works - backend only
app.get(`${songAPIurl}/getone`, song.getOne);// uses query
app.get(`${songAPIurl}/search`, song.search);// uses query
app.post(songAPIurl, song.create); //works - backend only
app.put(`${songAPIurl}/:eid`, song.update); // works - backend only
app.delete(`${songAPIurl}/:eid`, song.delete);



app.listen(process.env.SERVER_PORT, ()=>console.log('listening on port ' + process.env.SERVER_PORT));

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})