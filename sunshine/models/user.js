
var pool = require("./pool")

class User {
    constructor(){}
    register({managerName,managerPass},callback){
        pool.getConnection(function(err,connection){
            if(err){throw err}
            connection.query(`select * from manager where manager_name = ${managerName}`,function(err,results){
                if(results.length){
                    callback(0);
                    connection.release()
                }else{
                    connection.query(`insert into manager (manager_name,manager_pass) value (${managerName},${managerPass})`,function(err){
                        if(err){throw err}
                        callback(1)
                        connection.release()
                    })
                }
            })
        })
    }
    login({managerName,managerPass},callback){
        console.log(managerName,managerPass)
        pool.getConnection(function(err,connection){
            if(err) throw err
            console.log(`select * from manager where manager_name = '${managerName}'`)
            connection.query(`select * from manager where manager_name = '${managerName}'`,function(err,results){
                if(err) throw err
                if(results.length){
                    if(managerPass==`${results[0].manager_pass}`){
                        callback(1)
                    }else{
                        callback(2)
                    }
                }else{
                    callback(0)
                }
                connection.release()
            })
        })
    }
}

module.exports = User