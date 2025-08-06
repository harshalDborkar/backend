require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Aap twitter pe hai janab")
})

app.get('/login',(req,res)=>{
    res.send('<button>hwllo ji </button>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
