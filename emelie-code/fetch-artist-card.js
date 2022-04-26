function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const card = document.getElementById('artist-card');
const url = 'http://localhost:3000/artists';
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
      console.log(data);
      let artist = data;
      return artist.map(function(data) {
          let li = createNode('li');
          li.innerHTML = data.artistName
          append(card, li);
      })
  })
  .catch(function(error) {
      console.log(error);
  });
