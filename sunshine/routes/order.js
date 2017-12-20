var express = require('express');
var router = express.Router();
var Order = require("../models/order")
var order = new Order();
/* GET users listing. */

router.get('/getOrderData',function(req,res,next){
  order.getOrderData(function(data){
    res.send(data)
  })
})

router.get('/updateOrder',function(req,res,next){
    order.updateOrder(req.query,function(err){
        if(!err){
            res.send({msgCode:1})
        }else{
            res.send({msgCode:0})
        }
    })
})

router.get('/createOrder',function(req,res,next){
    var {customerName,customerPhone,enterTime,leaveTime,typeId} = req.query
    order.createOrder(req.query,function(err){
        if(!err){
            res.send({msgCode:1})
        }else{
            res.send({msgCode:0})
        }
    })
})

router.get('/changeData',function(req,res,next){
    var {leaveTime,orderId} = req.query
    order.changeDate({leaveTime,orderId},function(err){
        if(!err){
            res.send({msgCode:1})
        }else{
            res.send({msgCode:0})
        }
    })
})
module.exports = router;
