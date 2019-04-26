const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

//@route GET api/users/test
//@desc Test users route
//@access Public

router.get('/test', (req, res) => {
	res.json({ msg: 'Users Works' });
});

module.exports = router;
