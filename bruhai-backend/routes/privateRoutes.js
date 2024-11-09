const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

// @route   GET api/private
// @desc    Test route for private access
// @access  Private
router.get('/', auth, (req, res) => {
    res.json({ msg: 'Welcome to the private route!' });
});

module.exports = router;
