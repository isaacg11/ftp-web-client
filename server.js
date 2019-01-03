const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var Client = require('ftp');
 
var c = new Client();
c.connect({
    host: "127.0.0.1",
    port: 8000
});

app.use(bodyParser.json());

app.put('/campaigns', (req, res) => {
    let fullpath = __dirname + "/campaigns/" + req.query.name;
    c.put(fullpath, `/uploads/${req.query.name}`, function(err) {
        if (err) throw err;
        res.sendStatus(200)
    });
})

const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;