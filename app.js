const   express = require('express');
const   app     = express();
const   port    = process.env.NODEPORT || 8081

app.get('/', (req, res) => 
{
    res.sendFile(__dirname + "/index.html");
});

app.get('/port', (req, res) => 
{
    res.send(`{"port": "${port}"}`)
});

app.listen(port, () =>
{ 
    console.log("Rodando na porta " + port);
});

