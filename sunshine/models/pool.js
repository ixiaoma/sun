var mysql = require("mysql")
//创建连接池
module.exports = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"sunshine",
    port:"3306",
    connectionLimit:10
})