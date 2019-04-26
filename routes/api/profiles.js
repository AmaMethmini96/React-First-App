const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

//@route GET api/profile/test
//@desc Test profile route
//@access Public

router.get('/test', (req, res) => {
	res.json({ msg: 'Profile Works' });
});

module.exports = router;
