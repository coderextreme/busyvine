var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	try {
		console.log(req);
		res.json(req.originalUrl);
	} catch (e) {
		res.json(e);
	}
});

module.exports = router;
