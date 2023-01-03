import express from 'express';
import dotenv from 'dotenv';
import notes from './backend/data/notes.js';


const app = express();
dotenv.config();


const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
     
     res.send("Running Server");

});

app.get('/api/notes', (req,res) => {
     
    res.send(notes);

});

app.get('/api/notes/:id', (req,res) => {
     
    const note = notes.find((n) => n._id === req.params.id);   
    
    res.send(note);
    
});


app.listen(PORT,console.log("Runing"));