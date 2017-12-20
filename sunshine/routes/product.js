var express = require('express');
var router = express.Router();
var Product = require("../models/product")
var product = new Product();

router.get('/getRoomData',function(req,res,next){
  product.getRoomData(req.query,function(roomData){
    res.send(JSON.stringify(roomData))
  })
})

router.get('/getDetailData',function(req,res,next){
  var typeId = req.query.type_id
  product.getDetailData(typeId,function(data){
    res.send(data)
  })
})

router.get('/getBannerImg',function(req,res,next){
  product.getBannerImg(function(data){
    res.send(data)
  })
})

module.exports = router;
