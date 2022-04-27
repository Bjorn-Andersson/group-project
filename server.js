//Kod som Emelie skrivit
const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'rootuser',
  password: 'sitar123',
  database: 'groupproject'
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use(express.static('public'))
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/artists', (req, res) => {
  let sql = 'SELECT * FROM artist'
  connection.query(sql, function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})

app.get('/artists/:artist', (req, res) => {
  let sql = 'SELECT * FROM artist WHERE artistName = ?'
  connection.query(sql, [req.params.artist], function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})
