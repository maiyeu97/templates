var express = require ('express');
var path = require('path');
var app = express();
var server = app.listen(8000, listening);

function listening() {
    console.log('Server running at http://127.0.0.1:8000/');
}

app.use(express.static(path.join(__dirname, 'static')));

app.get('/weding', function (req, res) {
    res.sendFile(path.join(__dirname+ '/templates/weding.html'));
});

app.get('/anysite', function (req, res) {
    res.sendFile(path.join(__dirname+ '/templates/anysite.html'));
});

app.get('/enterprise', function (req, res) {
    res.sendFile(path.join(__dirname+ '/templates/enterprise.html'));
});

app.get('/page-advanced', function (req, res) {
    res.sendFile(path.join(__dirname+ '/templates/page-advanced.html'));
});

app.get('/page', function (req, res) {
    res.sendFile(path.join(__dirname+ '/templates/page.html'));
});
