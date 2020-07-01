const express = require('express');
const db = require('./models');

const authController = require('./controllers/auth')

const app = express();
app.use('/auth', authController)

app.get('/', (req, res) => {
    return res.json('Api rodando. . .')
})

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("http://localhost:3001/")
    });
});

