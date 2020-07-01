const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');
const {accountSignUp} = require('../validators/account');

const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (req, res) => {
    return res.json('Sign in')
});

router.get('/sign-up', accountSignUp, async (req, res) => {
    const { email, password } = req.body;

    const account = await Account.findOne({ where: { email } });
    if(account) return res.jsonBadRequest(null, 'Conta ja existe');

    const hash = bcrypt.hashSync(password, saltRounds)
    const newAccount = await Account.create({ email, password: hash});
    
    return res.jsonOK(newAccount, 'Conta criada')
});


module.exports = router;