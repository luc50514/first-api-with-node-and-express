var express = require('express');
var router = express.Router();
var getPlayer = require('../app/getPlayer.cjs')

router.get('/:playerid', function(req, res){
   res.send(getPlayer(req.params.playerid).Playerid);
});
router.post('/', function(req, res){
   res.send('POST route on players.');
});

//export this router to use in our index.js
module.exports = router;