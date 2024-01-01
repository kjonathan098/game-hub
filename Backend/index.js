"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.use(express.json());
app.get('/route', function (_req, res) {
    res.send('Hello, world!');
});
app.listen(4000, function () {
    console.log('listening on port 4000...');
});
