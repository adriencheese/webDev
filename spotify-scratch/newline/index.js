require('dotenv').config()
const express = require('express');
const querystring = require('querystring')
const axios = require('axios')
const app = express();
const port = 8888;

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI

// this code connects user and spotify
// express handles this connection
// 'req' is user requests to spotify
// 'res' is what spotify responds with after the request
// res.send() sents data back to the client to display

app.get('/', (req, res) => {
    res.send('home')
})

var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const stateKey = 'spotify_auth_state';
  
app.get('/login', (req, res) => {

    const state = generateRandomString(16)
    res.cookie(stateKey, state);

    var scope = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            // defines the query string that's appended to the redirect URL (spotify)
            // spotify then sends back an authorization code and sends the user to the REDIRECT_URI
            // we want to exchange the auth code for an access token
            response_type: 'code',
            client_id: CLIENT_ID,
            scope: scope,
            redirect_uri: REDIRECT_URI,
            state: state
    }));
})

app.get('/callback', (req, res) => {
    
    // redirected here after spotify gives us auth code
    // we need to exchange auth code for access token through a post request to /api/token
    
    const code = req.query.code || null; // this is the auth code
                                         // from spotify in the form of a query in the URL

    axios({ // this is a config object which automates the HTTP request
        url: 'https://accounts.spotify.com/api/token',
        method: 'post',
        data: querystring.stringify({ // request body
            grant_type: 'authorization_code', // three params required by spotify
            code: code,
            redirect_uri: REDIRECT_URI
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        },
    })
    
    // callbacks are calls to other functions within one function
    // this async axios method returns a promise which is handled by .then() and .catch()
    
    .then(response => { // activates on return of 200 status. we have access token now.
        if (response.status === 200) {
            const { access_token, refresh_token } = response.data // response.data is info from spotify
            
            const queryParams = querystring.stringify({
                access_token,
                refresh_token,
            })

            res.redirect(`http://localhost:3000/?${queryParams}`)

        } else {
            res.redirect(`http://localhost:3000/?${queryParams}`)
        }
    })
    .catch(error => { // on return of error 
        res.send(error);
    });
})

app.get('/refresh_token', (req, res) => {
    const { refresh_token } = req.query; // req.query from URL defined in the get function in /callback

    console.log('index.js: ')
    console.log(`${refresh_token}`)
    axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
        },
    })
        .then(response => {
            res.send(response.data)
        })
        .catch(error => {
            res.send(error)
        })
})

app.listen(port, () => {
    console.log(`LISTENING ON http://localhost:${port}`)
})