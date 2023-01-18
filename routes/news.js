const express = require('express');
const router = express.Router();
const dbCon = require('../config/dbCon')


router.get('/', function(req, res, next) {

    const connection = dbCon()
    connection.query('SELECT * FROM news', (error, result) => {

        res.render('news/news', {
            news: result
        });

    })
});

module.exports = router;
