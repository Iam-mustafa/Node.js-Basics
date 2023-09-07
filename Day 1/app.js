const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('req: ', req.url);
    next();
});

//http://localhost:7000/

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.post('/data', (req, res) => {
    console.log('body: ', req.body);
    res.send(req.body);
});

app.listen(7000, err => {
    if(err){
        console.log('Error: ', err);
        return;
    }
    console.log('Server Listening!');
});