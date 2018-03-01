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


const userAPIurl = '/api/users'

app.post(`${userAPIurl}/login`,middleware, user.get); 
app.post(`${userAPIurl}/create`, user.create); 
app.put(`${userAPIurl}/:id`, middleware, user.update);  
app.delete(`${userAPIurl}/logout`, user.logout);

const songAPIurl = '/api/songs'

app.get(`${songAPIurl}/get`, song.getAll); 
app.get(`${songAPIurl}/getone/:eid`, song.getOne);
app.get(`${songAPIurl}/search`, song.search);// uses query
app.post(songAPIurl, song.create); 
app.put(`${songAPIurl}/:eid`, song.update); 
app.delete(`${songAPIurl}/:eid`, song.delete);

const playlistURL = '/api/playlist'

app.get(`${playlistURL}/get`, playlist.getAll); 
app.get(`${playlistURL}/getone/:pid`, playlist.getOne);
app.post(playlistURL, playlist.create); 
app.put(`${playlistURL}/:pid`, playlist.update); 
app.delete(`${playlistURL}/:pid`, playlist.delete);


app.listen(process.env.SERVER_PORT, ()=>console.log('listening on port ' + process.env.SERVER_PORT));

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})