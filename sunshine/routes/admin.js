
var express = require('express')
var router = express.Router()

var multiparty = require('multiparty')
var fs = require('fs')
 
router.post('/uploadImg',function(req,res){
    var form = new multiparty.Form({uploadDir:'./public/images/files'})
    form.parse(req,function(err,fields,files){
        if(err){
            console.log(err)
        }else{
            console.log(files)
            if(files.roompic){
                res.send(JSON.stringify({"imgSrc":files.roompic[0].path.replace(/\\/g,"/")}))
            }else{
                res.send({
                    msgInfo:"请设置input的name为roompic",
                    imgSrc:""
                })
            }
        }
    })
})

module.exports = router
