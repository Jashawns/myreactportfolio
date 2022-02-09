const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendGrid/mail');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Orgin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res, next) => {
    res.send('API Status: I\'m Awesome')
});

app.post('/api/email', (req,res, next) => {
    sendGrid.setApiKey('');
    const msg = {
        to: 'jashawnstewart@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message,
        html:'<strong>and easy to do anywhere, even with Node.js</strong>'
    }

    sendGrid.send(msg)
    .then(result => {

        res.status(200).json({
            sucess: true
        });
    })

    .catch(err => {
        console.log('error:', err);
        res.status(401).json({
            success: false
        });

    });
});

app.listen(3030, '0.0.0.0');