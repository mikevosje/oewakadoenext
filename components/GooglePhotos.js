const axios = require('axios');

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g

function extractPhotos(content) {
  const links = new Set()
  let arraywithmatches = [];
  let match
  while (match = regex.exec(content)) {
    console.log(arraywithmatches.indexOf(match[1]) === -1);
    if(arraywithmatches.indexOf(match[1]) === -1) {
      links.add({ src: match[1], height: 341, width: 512 })
      arraywithmatches.push(match[1]);
    }
    // links.add(match[1])
  }
  return Array.from(links)
}

async function getAlbum(id) {
  console.log(id);
  try {
    const response = await axios.get(`https://photos.app.goo.gl/${id}`)
    return extractPhotos(response.data)
  }
  catch(e) {
    return null
  }
}


module.exports = {
  getAlbum
}
