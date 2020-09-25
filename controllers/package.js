const pool = require('../mySQl/connections')
const mysql = require('mysql')


let getPackage = (req,res)=>{
  let sql = "SELECT * FROM package"

  pool.query(sql,(err,rows)=>{
    return res.json(rows)
  })
}


module.exports ={getPackage}