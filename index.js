var express = require('express');
const path = require('path');
let bodyParser = require('body-parser');
const Mailchimp = require('mailchimp-api-v3');

require('dotenv').config();
var mc_api_key = process.env.MAILCHIMP_API_KEY;
var list_id = process.env.MAILING_LIST_ID;

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mailchimp = new Mailchimp(mc_api_key);

console.log('node_env: ' + process.env.NODE_ENV);
console.log('port: ' + process.env.PORT);

app.get('/api/confirmation', (req, res) => {
    const apiConfirmation = 'You have reached my api!';

    res.json(apiConfirmation);
    console.log('successfully reached /api/confirmation');
});

app.post('/api/add-subscriber', (req, res) => {
    console.log(req)
    mailchimp.post(`lists/${list_id}/members/`, {
        "email_address": req.body.email_address,
        "status": "subscribed",
        "merge_fields": {
            "FNAME": req.body.FNAME,
            "LNAME": ''
        }
    })
        .then((results) => {
            console.log('api success');
            console.log(results);
            res.send(results);
        })
        .catch((error) => {
            console.log('api failure');
            console.log(error);
            res.send(error);
        });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    console.log('unmatched api call');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`express app listening on port ${port}`);
