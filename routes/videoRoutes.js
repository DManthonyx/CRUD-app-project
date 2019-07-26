const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.post('/:id', videoController.createVideo);

module.exports = router;
