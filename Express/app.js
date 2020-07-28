const express = require('express');
const path = require('path');
const app = express();
const port = 80;


//EXPRESS SPACIFIC STUFF
app.use('/static', express.static('static')); //serving static files 


//PUG SPACIFIC STUFF
app.set('view engine', 'pug'); // Set the Template Engine 
app.set('views', path.join(__dirname, 'views')); // Set the views Directory 

// ENDPOINTS
app.get('/', (res, req) => {
    // const content = "This is a Description";
    const content = "THIS IS My CONTENT";
    const title = "THIS IS MY TITLE";
    const params = {'content':content, 'title':title};
    req.status(200).render('index.pug', params);
});


// STARTING SERVER
app.listen(port, () => {
    console.log(`The application started successfully in port no ${port}..`);
});

