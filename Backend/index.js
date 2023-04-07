const express = require('express');
const app = express();
const PORT  = 5000;
const cors  =require('cors')
const pool = require('./db.js')
const routes = require('./routes/todos.router')

// middleware
app.use(cors());
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server has started on port  ${PORT}`)
})

// Routes
app.use(routes)