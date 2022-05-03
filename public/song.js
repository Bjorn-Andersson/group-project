const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
let artist = params.artist
let album = params.album
let song = params.song
let url = 'http://localhost:3000/artists/' + artist

fetch(url + '/' + album + '/' + song)
  .then(resp => resp.json())
  .then(function (data) {
    let entry = data
    return entry.map(function (data) {
      let p = document.createElement('p')
      p.innerHTML = data.songLyrics
      document.querySelector('#ulLyrics').appendChild(p)
      document.querySelector('.center').textContent = data.albumTitle
      document.querySelector('#songTitle').textContent =
        data.songTitle + ' - Lyrics'
      document.querySelector('.songTitle').textContent = data.songTitle
    })
  })
  .catch(function (error) {
    console.log(error)
  })

fetch(url + '/' + album)
  .then(resp => resp.json())
  .then(function (data) {
    let entry = data
    return entry.map(function (data) {
      let back = document.querySelector('.backLink')
      back.innerHTML = `<a href="./album.html?artist=${data.artistName}&album=${data.albumTitle}">back</a>`
    })
  })
  .catch(function (error) {
    console.log(error)
  })