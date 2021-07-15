const   express = require('express');
const   app     = express();
const   port    = process.env.NODEPORT || 80

app.get('/', (req, res) => 
{
    res.sendFile(__dirname + "/index.html");  
});

app.listen(port, () =>
{ 
    console.log("Rodando na porta " + port);
});

