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

const mongo = require("mongodb").MongoClient
const db_url = "mongodb://localhost:27017"
let db

mongo.connect(
    db_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        db = client.db("comments")
        comments = db.collection("comments")
    }
)

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

app.delete('/artists', (req, res) => {
  let sql = 'CALL DeleteArtist(?)'
  connection.query(sql, [req.body.artistID], function (error) {
    if (error) throw error
    res.end('The artist has retired, permanently')
  })
})

app.get('/artists', (req, res) => {
  let sql = 'SELECT * FROM artist WHERE artistPhoto = ?'
  connection.query(sql, [req.params.artist], function (error, results, fields) {
    if (error) throw error
    res.json(results)
  })
})

app.get('/artists/:artist', (req, res) => {
  let sql =
    'SELECT * FROM artist join album on artistID = albumArtistID WHERE artistName = ?'
  connection.query(sql, [req.params.artist], function (error, results) {
    if (error) throw error
    res.json(results)
  })
})

app.get('/artists/:artist/img', (req, res) => {
  let sql = 'SELECT artistPhoto FROM artist WHERE artistName = ?'
  connection.query(sql, [req.params.artist], function (error, results) {
    if (error) throw error
    res.json(results)
  })
})

app.get('/artists/:artist/:album', (req, res) => {
  let sql =
    'select * from artist join album on artistID = albumArtistID join song on album.albumID = song.songAlbumID where albumTitle = ?'
  connection.query(sql, [req.params.album], function (error, results) {
    if (error) throw error
    res.json(results)
  })
})

app.get('/artists/:artist/:album/:song', (req, res) => {
  let sql =
    'select * from album join song on album.albumID = song.songAlbumID where songTitle = ?'
  connection.query(sql, [req.params.song], function (error, results) {
    if (error) throw error
    res.json(results)
  })
})

//MongoDB
app.get("/comments", (req, res) => {
  comments.find().toArray((err, items) => {
    if (err) throw err
    res.json({comments: items})
  })
  console.log('Hej')
})

app.post

app.delete

app.update
