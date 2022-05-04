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

let genreArray = []
let genreList = []
const select = document.querySelector('#selectGenre')
fetch(url + '/' + 'genre')
  .then(resp => resp.json())
  .then(function (data) {
    let artists = data
    return artists.map(function (data) {
      let artist = data.artistName
      let genre = data.genreName
      let genreObject = { genre, artist }
      genreArray.push(genreObject)
      let option = document.createElement('option')
      if (genreList.indexOf(data.genreName) === -1) {
        genreList.push(data.genreName)
        genreList.forEach(entry => {
          option.innerHTML = entry
          append(select, option)
        })
      }
    })
  })
  .catch(function (error) {
    console.log(error)
  })

const storeSingers = document.getElementsByClassName('singers')
function filterGenre() {
  for (const singerElement of storeSingers) {
    singerElement.style.display = 'none'
  }
  var value = select.options[select.selectedIndex].value
  if (value === 'Välj genre...') {
    for (const singerElement of storeSingers) {
      singerElement.style.display = 'flex'
    }
  } else {
    genreArray.forEach(entry => {
      if (entry.genre === value) {
        for (let singerElement of storeSingers) {
          let singers = singerElement.textContent
          if (singers.includes(entry.artist)) {
            singerElement.style.display = 'flex'
          }
        }
      }
    })
  }
}

const searchInput = document.getElementById('searchInput')
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

// select.addEventListener('', () => {
//   for (const singerElement of storeSingers) {
//     if (genreArray.includes(option.value)) {
//       // eller option.target.value ?
//       singerElement.style.display = 'flex'
//     } else {
//       singerElement.style.display = 'none'
//     }
//   }
// })

const url_db = 'http://localhost:3000/comments'
fetch(url_db)
  .then(resp => resp.json())
  .then(function (data) {
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
