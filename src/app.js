const express = require('express');
const app = new express();


app.get('/', (req, res)=>{
    console.log('foi');
    res.send('foi');
});


app.listen(8080, ()=>{
    console.log("listen at port 8080");
});