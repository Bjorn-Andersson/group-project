const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
let artist = params.artist
const url = 'http://localhost:3000/artists/' + artist
fetch(url)
  .then(resp => resp.json())
  .then(function (data) {
    let entry = data
    return entry.map(function (data) {
      let li = document.createElement('li')
      li.innerHTML = data.artistName
      document.querySelector('#ul').appendChild(li)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
