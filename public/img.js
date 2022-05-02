const urlSearchParamsImg = new URLSearchParams(window.location.search)
const paramsImg = Object.fromEntries(urlSearchParamsImg.entries())
let artistImg = paramsImg.artist
let urlImg = 'http://localhost:3000/artists/' + artistImg

fetch(urlImg + '/img')
  .then(resp => resp.json())
  .then(function (data) {
    let entry = data
    return entry.map(function (data) {
      const artistImg = document.getElementById('image')
      let src = `img/${data.artistPhoto}`
      let img = document.createElement('img')
      img.src = src
      artistImg.appendChild(img)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
