const clientID = "fda597fe607c7161f2a0";
const clientSecret = "620b1562c7c1cc57112fb3b54a2978df22f98e37";

// const Koa = require("koa");
// const path = require("path");
// const serve = require("koa-static");
// const route = require("koa-route");
// const express = require("express");
const express = require("express");
const app = express();
const parser = require("body-parser");

let redis = require("redis");
let session = require('express-session');
let redisStore = require('connect-redis')(session);
let client = redis.createClient();

const axios = require("axios");

app.use(parser.urlencoded( { extended: true }));
app.use(parser.json());

app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Methods", "POST,GET,PATCH,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");

    // DEV only
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");

    next();
});


app.use(session({
    'secret': 'endeverv1',
    // cookieName: 'gobsession',
    // create new redis store.
    name: '__enDever',
    store: new redisStore(
        {host: 'localhost', port: 6379, client: client, ttl: 260}
    ),
    saveUninitialized: false,
    resave: false,
    cookie: {
        secure: false,
        maxAge: 31536000000,
        httpOnly: false
    }
}));

// const app = new Koa();

// const main = serve(path.join(__dirname + "/"));

const oauth = async (ctx) => {
    const requestToken = ctx.request.query.code;
    console.log("authorization code:", requestToken);

    const tokenResponse = await axios({
        method: "post",
        url: "https://github.com/login/oauth/access_token?" + `client_id=${clientID}&` + `client_secret=${clientSecret}&` + `code=${requestToken}`,
        headers: {
            accept: "application/json"
        }
    });

    const accessToken = tokenResponse.data.access_token;
    console.log(`access token: ${accessToken}`);

    const result = await axios({
        method: "get",
        url: `https://api.github.com/user`,
        headers: {
            accept: "application/json",
            Authorization: `token ${accessToken}`
        }
    });
    console.log(result.data);
    const name = result.data.name;


};

app.get("/oauth/github", (req, res) => {
    oauth().then(res => {
        const a = {
            response: 'success'
        }
        res.json(a);

    })


});


// app.use(main);
// app.use(route.get("/oauth/callback", oauth));

app.listen(4000);
