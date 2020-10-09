const pool = require('../mySQl/connections')
const mysql = require('mysql')


let getUsers = (req,res)=>{
   let sql = "SELECT * FROM users"
  //  sql = mysql.format(sql)

   pool.query(sql,(err,rows)=>{
     return res.json(rows)
   })
}

let getUser = (req,res)=>{
  console.log(req)
  let email = req.params.email
  let sql = 'SELECT * FROM user WHERE email = ?'
  sql = mysql.format(sql,[email])
  
  pool.query(sql,(err,rows)=>{
    return res.json(rows)
  })
}

let createUser = (req,res)=>{
  console.log(req.params)
  let email = req.params.email
  let firstName = req.params.firstName
  let lastName = req.params.lastName
  let password = req.params.password
  let address = req.params.address
  let town = req.params.town
  let state = req.params.state
  let date = req.params.date
  
  let sql = ('INSERT INTO users Values(DEFAULT,?,?,?,?,?,?,?,?)')
  sql = mysql.format(sql,[firstName,lastName,email,password,address,town,state,date])

  pool.query(sql,(err,results)=>{
    return res.json(results)
  })
}


module.exports= {getUser, getUsers, createUser}