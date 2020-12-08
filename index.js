const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const user = require('./routes/user')
const package = require('./routes/package')
const order = require("./routes/order")
const cors = require('cors')
const path = require('path')
const publicPath = path.join(__dirname,"realClient/client/build")
const port = process.env.PORT || 4000


// seeing if it is working
app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname,"realClient/client/build")))
app.use(express.static(publicPath))
app.use(package)
app.use(user)
app.use(order)
app.use(cors({
   origin: 'https://michaels-final-app.herokuapp.com'
}))

app.get('/', (req, res) => {
    res.send('Welcome to our express app hahahahaha')
})

app.get('*',(req,res)=>{
   res.sendFile(path.join(publicPath,"index.html"))
})

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})