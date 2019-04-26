const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

//@route GET api/posts/test
//@desc Test post route
//@access Public

router.get('/test', (req, res) => {
	res.json({ msg: 'Posts Works' });
});

module.exports = router;
