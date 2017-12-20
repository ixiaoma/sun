
var pool = require("./pool")

class Product {
    constructor(){}
    getRoomData({typeId,pageNum,pageSize},callback){
        //console.log(typeId)
        pool.getConnection(function(err,connection){
            if(err) throw err
            var sqlStr = `select * from room,roomtype where roomtype.type_id = ${typeId} and room.type_id = roomtype.type_id `
            if(pageNum){
                pageSize = pageSize || 5
                var startNum = pageSize * (pageNum - 1)
                sqlStr += `limit ${startNum} , ${pageSize}`
            }
            //console.log(sqlStr)
            connection.query(sqlStr,function(err,roomData){
                if(err) throw err
                //console.log(roomData)
                connection.query(`select count(*) as total from room,roomtype where roomtype.type_id = ${typeId} and room.type_id = roomtype.type_id`,function(err,results){
                    console.log(results,results[0].total)
                    callback({
                        count : results[0].total,
                        roomData
                    })
                    connection.release()
                })
            })
        })
    }
    getDetailData(typeId,callback){
        pool.getConnection(function(err,connection){
            if(err) throw err
            var sqlStr = "select * from roomtype"
            if(typeId){
                sqlStr +=  (" where type_id = "+typeId )
            }
            connection.query(sqlStr,function(err,results){
                callback(results)
                connection.release()
            })
        })
    }
    getBannerImg(callback){
        pool.getConnection(function(err,connection){
            if(err) throw err
            connection.query(`select * from bannerimg`,function(err,results){
                if(err) throw err
                callback(results)
                connection.release()
            })
        })
    }
}
module.exports = Product