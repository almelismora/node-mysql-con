const express = require('express');
const router = express.Router();
const dbCon = require('../config/dbCon')
const connection = dbCon()


router.get('/', function(req, res, next) {

    
    connection.query('SELECT * FROM news LIMIT 5', (error, result) => {

        res.render('news/news', {
            news: result
        });

    })

    console.log(req.query)

    // if ( req.query.page === '1' ) {
    //     connection.query('SELECT * FROM news LIMIT 5', (error, result) => {

    //         res.render('news/news', {
    //             news: result
    //         });
    
    //     })
    // }

    if ( req.query.page === '2' ){
        connection.query('SELECT * FROM news LIMIT 5, 5', (error, result) => {

            res.render('news/news', {
                news: result
            });
        })
    }

});

router.post('/', function(req, res, next) {

    console.log(req.body)
    const { title, news } = req.body 

    if ( title != '' && news != '' ){
        connection.query('INSERT INTO news SET ?', {
            title,
            news
        }, (error, result) => {
            res.redirect('/news')
        } )
    } else {
        console.log('Body vacio!')
        res.status(502)
        res.send('por favor rellene todos los campos')
    }

        

});

module.exports = router;
