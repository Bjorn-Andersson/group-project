function createNode(element) {
  return document.createElement(element)
}

function append(parent, el) {
  return parent.appendChild(el)
}

const url = 'http://localhost:3000/artists'

fetch(url)
  .then(resp => resp.json())
  .then(function (data) {
    console.log(data)
    let artists = data
    return artists.map(function (data) {

      for (i = 0; i < 1; i++) {
        let src = `img/${data.artistPhoto}`
        let div = document.createElement('div')
        div.id = 'carddiv'
        div.innerHTML = `<h3><a href="./artist.html?artist=${data.artistName}">${data.artistName}</a></h3> <img src="${src}">`
        document.body.appendChild(div)
      }
    })
  })
  .catch(function (error) {
    console.log(error)
  })
