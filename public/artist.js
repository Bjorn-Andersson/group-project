const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
let artist = params.artist
let url = 'http://localhost:3000/artists/' + artist

fetch(url)
  .then(resp => resp.json())
  .then(function (data) {
    let entry = data
    return entry.map(function (data) {
      let li = document.createElement('li')
      li.innerHTML = `<a href="./album.html?artist=${data.artistName}&album=${data.albumTitle}">${data.albumTitle}</a>`
      document.querySelector('#ul').appendChild(li)
      document.querySelector('.center').textContent = data.artistName
      document.querySelector('#artistTitle').textContent = data.artistName
    })
  })
  .catch(function (error) {
    console.log(error)
  })
