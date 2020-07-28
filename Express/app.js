const express = require('express');
const path = require('path');
const app = express();
const port = 80;

//serving static files 
app.use('/static', express.static('static'));

// Set the Template Engine
app.set('view engine', 'pug');

// Set the views Directory  
app.set('views', path.join(__dirname, 'views'));

//Our pug demo endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title: 'Hello World', message: "PUG End Point" });
});


app.get("/", (req, res) => {
    res.send("This is my first express app");
});

app.get("/about", (req, res) => {
    res.send("get request:about page");
});

app.post("/about", (req, res) => {
    res.send("post request: about page");
});


app.listen(port, () => {
    console.log(`The application started successfully in port no ${port}..`);
});

