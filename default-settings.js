var path = require('path');

var settings = {
    port: 7000,
    github: {
        clientId: "",
        secret: "",
        authCallback: "http://localhost:7000/login/callback",
        accessToken: ""
    },
    mongo: {
        url: 'mongo/flows'
    },
    session: {
        key: 'nr.sid',
        secret: 'giraffe'
    },
    gistDir: path.join(__dirname,"./data/gists"),
    nodeDir: path.join(__dirname,"./data/nodes"),
    admins: ["knolleary","dceejay"],
    twitter: {
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
    },
    librariesIO: {
        apiKey: ''
    },
    slack: {
        webhook: ''
    }
};

module.exports = settings;
