
var pool = require("./pool")

class Order {
    constructor(){}
    getOrderData(callback){
        pool.getConnection(function(err,connection){
            if(err) throw err
            connection.query("select * from orderlist,roomtype where orderlist.type_id = roomtype.type_id",function(err,results){
                callback(results)
                connection.release()
            })
        })
    }
    createOrder({roomId,customerName,customerPhone,enterTime,leaveTime,typeId},callback){
        //console.log(customerName,customerPhone,enterTime,leaveTime,typeId)
        pool.getConnection(function(err,connection){
            if(err) throw err
            var sqlStr = ""
            if(roomId){
                sqlStr = `insert into orderlist (room_id,type_id,enter_time,leave_time,customer_name,customer_phone) values (${roomId},${typeId},'${enterTime}','${leaveTime}',${customerName},${customerPhone})`
            }else{
                sqlStr = `insert into orderlist (type_id,enter_time,leave_time,customer_name,customer_phone) values (${typeId},'${enterTime}','${leaveTime}',${customerName},${customerPhone})`
            }
            console.log(sqlStr)
            connection.query(sqlStr,function(err){
                console.log(err)
                callback(err)
                connection.release()
            })
        })
    }
    updateOrder({orderId,roomId,enterTime,leaveTime},callback){
        pool.getConnection(function(err,connection){
            if(err) throw err
            var sqlStr = ""
            if(!roomId){
                `update orderlist set enter_time='${enterTime}',leave_time='${leaveTime}' where order_id = ${orderId}`
            }else if(!enterTime){
                `update orderlist set room_id=${roomId} where order_id = ${orderId}`
            }else{
                `update orderlist set room_id=${roomId},enter_time='${enterTime}',leave_time='${leaveTime}' where order_id = ${orderId}`
            }
            connection.query(sqlStr,function(err){
                console.log(err)
                callback(err)
                connection.release()
            })
        })
    }
    changeDate({leaveTime,orderId},callback){
        pool.getConnection(function(err,connection){
            if(err) throw err
            connection.query(`update cart set leave_time = '${leaveTime}' where order_id = ${orderId}`,(err)=>{
                callback(err);
                console.log("修改日期")
                connection.release();
            })
        })
    }
}
module.exports = Order