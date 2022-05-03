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
      let src = `img/${data.artistPhoto}`
      let div = document.createElement('div')
      div.id = 'carddiv'
      div.className = 'singers'
      div.innerHTML = `<h3><a href="./artist.html?artist=${data.artistName}">${data.artistName}</a></h3> <img src="${src}">`
      document.body.appendChild(div)
    })
  })
  .catch(function (error) {
    console.log(error)
  })

fetch(url + '/' + 'genre')
  .then(resp => resp.json())
  .then(function (data) {
    console.log(data)
    let artists = data
    return artists.map(function (data) {
      let option = document.createElement('option')
      let select = document.querySelector('#selectGenre')
      option.innerHTML = data.genreName
      append(select, option)
    })
  })
  .catch(function (error) {
    console.log(error)
  })

const url_db = 'http://localhost:3000/comments'
fetch(url_db)
  .then(resp => resp.json())
  .then(function (data) {
    console.log(data.comments)
    let comments = data.comments
    return comments.map(function (data) {
      let commentDiv = document.getElementById('comments')
      commentDiv.innerHTML = `<form>

          </form>`
    })
  })
  .catch(function (error) {
    console.log(error)
  })

const searchInput = document.getElementById('searchInput')
const storeSingers = document.getElementsByClassName('singers')
searchInput.addEventListener('keyup', e => {
  const { value } = e.target
  const searchQuery = value.toLowerCase()
  for (const singerElement of storeSingers) {
    let singers = singerElement.textContent.toLowerCase()
    if (singers.includes(searchQuery)) {
      singerElement.style.display = 'flex'
    } else {
      singerElement.style.display = 'none'
    }
  }
})
