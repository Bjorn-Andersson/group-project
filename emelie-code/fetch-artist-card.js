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
      let li = createNode('li')
      li.innerHTML = data.artistName
      append(card, li)
    })
  })
  .catch(function (error) {
    console.log(error)
  })

const title = document.getElementById('title')
fetch(url)
  .then(resp => resp.json())
  .then(function (data) {
    let artist = data
    return artist.map(function (data) {
      let p = createNode('p')
      p.innerHTML = `<a href="artist.html?artist=${data.artistName}">${data.artistName}</a></h3>`
      append(title, p)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
