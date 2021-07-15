const express = require('express');
const { log } = require('node:console');
const app = express();
const port = 1337;

app.get('/', (req, res) => 
{
    res.sendFile(__dirname + "/index.html");  
});


app.listen(port, () =>
{ 
    console.log("Rodando em localhost:" + port);
});

