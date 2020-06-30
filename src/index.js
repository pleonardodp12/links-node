const express = require('express');

const app = express();


app.get('/', (req, res) => {
    return res.json('Api rodando. . .')
})

app.listen(3001, () => {
    console.log("http://localhost:3001/")
});