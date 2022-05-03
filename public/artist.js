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

const url_db = 'http://localhost:3000/comments'

fetch(url_db)
  .then(resp => resp.json())
  .then(function (data) {
    console.log(data.comments)
    let comment = data.comments
    return comment.map(function (data) {
      let commentDiv = document.createElement('div')
      commentDiv.id = 'commentDiv'
      commentDiv.innerHTML = `<div><h4>Namn: ${data.name}</h4></div> <div><h5>Artist: ${data.artist}</h5></div> <div><p>${data.comment}</p></div>`
      document.body.appendChild(commentDiv)
    })
  })
  .catch(function (error) {
    console.log(error)
  })

const dbForm = document.getElementById('formComment')
const dbName = document.getElementById('name')
const dbComment = document.getElementById('comment')
const dbNumber = document.getElementById('number')
const dbArtist = document.getElementById('artist')

function newArtist(event) {
  event.preventDefault()
  let name = dbName.value
  let comment = dbComment.value
  let artist = dbArtist.value
  let number = dbNumber.value
  location.reload()

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ name: name,  comment: comment, artist: artist, number: number })
    })
    return response.json()
  }

  postData('http://localhost:3000/comments').then(data => {
    console.log(data)
  })
}

dbForm.addEventListener('submit', newArtist, false)
