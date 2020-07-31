const bodyparser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// getting-started-mongos
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', { useNewUrlParser: true, useUnifiedTopology: true });

//Defining Mongos Sechema
const ContactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});
const Contact = mongoose.model('Contact', ContactSchema);

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
    res.status(200).render('../templates/contact.pug');
});

app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send('This data has been saved to the database.');
    }).catch(() => {
        res.status(400).send('Item was not to the database.');
    });
});

app.listen(port, () => {
    console.log(`The applecation is started successfully on port number ${port}...`);
});