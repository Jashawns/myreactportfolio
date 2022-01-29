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
    sendGrid.setApiKey('SG.FQ3IB-U-Q02QiGvJ7tW-Sg.Okw7V4gdft0SdgkVSOACUg9_uhiS5O-X-VW29WMiH2A');
    const msg = {
        to: 'shawny583@hotmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
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