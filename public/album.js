const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
let artist = params.artist
let album = params.album
let url = 'http://localhost:3000/artists/' + artist

fetch(url + '/' + album)
  .then(resp => resp.json())
  .then(function (data) {
    let entry = data
    return entry.map(function (data) {
      let li = document.createElement('li')
      li.innerHTML = `<a href="./song.html?artist=${data.artistName}&album=${data.albumTitle}&song=${data.songTitle}">${data.songTitle}</a>`
      document.querySelector('#ulAlbum').appendChild(li)
      document.querySelector('.center').textContent = data.albumTitle
      document.querySelector('#albumTitle').textContent = data.albumTitle
    })
  })
  .catch(function (error) {
    console.log(error)
  })

fetch(url)
  .then(resp => resp.json())
  .then(function (data) {
    let entry = data
    return entry.map(function (data) {
      let back = document.querySelector('.backLink')
      back.innerHTML = `<a href="./artist.html?artist=${data.artistName}">Tillbaka</a>`
    })
  })
  .catch(function (error) {
    console.log(error)
  })
