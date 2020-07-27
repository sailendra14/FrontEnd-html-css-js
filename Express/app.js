const express = require('express');
const app = express();
const port = 8000;

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

