function createNode(element) {
  return document.createElement(element)
}

function append(parent, el) {
  return parent.appendChild(el)
}

const card = document.getElementById('artist-card')
const url = 'http://localhost:3000/artists'
fetch(url)
  .then(resp => resp.json())
  .then(function (data) {
    console.log(data)
    let artist = data
    return artist.map(function (data) {
      let h3 = createNode('h3')
      h3.innerHTML = `<a href="./artist.html?artist=${data.artistName}">${data.artistName}</a>`
      append(card, h3)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
