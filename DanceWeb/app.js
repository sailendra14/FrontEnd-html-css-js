const express = require('express');
const path = require('path');
const app = express();
const port = 80;


//Express specific stuff
app.use('/static', express.static('static')); //for serving static files
app.use(express.urlencoded());

//Pug specific stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates')); //Set the views directory

//Endpoints
app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('../templates/home.pug', params);
});

app.get('/contact', (req, res) => {
    const params = {};
    res.status(200).render('../templates/contact.pug', params);
});

app.listen(port, () => {
    console.log(`The applecation is started successfully on port number ${port}...`);
});