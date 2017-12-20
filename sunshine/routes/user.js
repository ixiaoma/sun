var express = require('express');
var router = express.Router();
var User = require("../models/user")
var user = new User();
/* GET users listing. */
router.post('/register',function(req,res,next){
  user.register(req.body,function(msgCode){
    res.send({msgCode})
  })
})

router.post('/login',function(req,res,next){
  console.log(req.body)
  user.login(req.body,function(msgCode){
    res.send({msgCode})
  })
})
module.exports = router;
