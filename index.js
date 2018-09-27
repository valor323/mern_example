const express = require('express');
const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req,res)=> {
    res.send('<h1>This is my awesome server!</h1>')
});

app.listen(PORT, ()=>{
    console.log('server running on PORT:' + PORT)
});

