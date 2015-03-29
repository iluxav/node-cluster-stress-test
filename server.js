var express = require('express')
var app = express()
var i = 1;
app.get('/', function(req, res) {
    console.log(process.env['WORKER_NAME']);
    var srv = Math.floor((Math.random() * 4) + 1);
    console.log('srv ', srv);
    if (!process.env['WORKER_NAME'] || process.env['WORKER_NAME'] == 'Server ' + srv) {
        var time = new Date().getTime() + 100;
        console.log(process.env['WORKER_NAME'], 'OVERLOAD!!!!');
        while (new Date().getTime() <= time) {

        }
        console.log('Finnished', process.env['WORKER_NAME']);
    }
    var d= new Date();
    res.send(d.getHours() + ':' + d.getMinutes() + d.getSeconds());

})

var server = app.listen(3000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port, process.env['WORKER_NAME'])

})
