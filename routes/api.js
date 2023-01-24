const express = require('express');
const router = express.Router();
const axios = require('axios')


router.get('/', async (req, res) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response.data)
    // console.log(response.data[0].address.city)

    res.render('api', { apis: response.data, title: 'Api Users' });
});

module.exports = router;
