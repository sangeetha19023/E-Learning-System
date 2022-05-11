const courseController = require('../../controller/course');
const express = require('express');
let router = express.Router();

router.get('/getallcourses', courseController.getallcourses);

module.exports = router;