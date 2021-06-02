const fdk=require('@fnproject/fdk');
const http = require('http');

fdk.handle(function(input){

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

    request.write(JSON.stringify(input));
    request.end();



    console.log('\nInside the function');


    return {'message': 'concluded'}

})
