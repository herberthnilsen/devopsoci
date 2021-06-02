
const express = require('express');
const app = express();
const http = require('http');
const MySQLUtil = require('./mysql/mysql');
const tracer = require('./tracer/apm');
const apmMiddleware = require('zipkin-instrumentation-express').expressMiddleware;

app.use(apmMiddleware({tracer, serviceName: 'DemoDevOps_app'}));

app.use(express.json());
app.get('/', (req, res) => {
    console.log('foi');
    res.send({ code: 200, message: "Ok!" });
});


app.post('/mysql', (req, res) => {
    try {
        new MySQLUtil().save(
            {
                nome: req.body.data.resourceName
            });
        console.log(`request=>`);
        console.dir(req.body.data.resourceName)

        res.send({ codse: 200, message: "Gravado com sucesso" });
    } catch (ex) {
        res.send(ex);
    }

});

app.post('/teste', (req, res) => {
    let request = http.request({
        host: '132.226.123.75',
        path: '/mysql',
        port: '8081',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }, (response) => {
        response.on('data', d => {
            process.stdout.write(d)
        })
    });

    request.on('error', error => {
        console.error(error)
    })

    request.write(JSON.stringify(req.body));
    request.end();



    console.log('\nInside the function');


    res.send({ code: 200, message: "Flaooo" });

});

app.listen(8080, () => {
    console.log("listen at port 8080");
});