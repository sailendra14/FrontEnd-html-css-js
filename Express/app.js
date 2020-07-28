const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;


//EXPRESS SPACIFIC STUFF
app.use('/static', express.static('static')); //serving static files 
app.use(express.urlencoded())


//PUG SPACIFIC STUFF
app.set('view engine', 'pug'); // Set the Template Engine 
app.set('views', path.join(__dirname, 'views')); // Set the views Directory 

// ENDPOINTS
app.get('/', (res, req) => {
    const content = "THIS IS My CONTENT";
    const title = "THIS IS MY TITLE";
    const params = {'content':content, 'title':title};
    req.status(200).render('index.pug', params);
});

app.post('/', (req, res)=>{
    name = req.body.name
    email = req.body.email
    age = req.body.age
    
    let outputtowrite = `The name of the client is ${name}, ${age} years old.`
    fs.writeFileSync('output.txt', outputtowrite)
    const params = {'message': 'You form has been submit successfully!'};
    res.status(200).render('index.pug', params);

});

// STARTING SERVER
app.listen(port, () => {
    console.log(`The application started successfully in port no ${port}..`);
});

