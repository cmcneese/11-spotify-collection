
export default class Model {

  constructor(data) {
    this.artist = data.artists[0].name;
    this.name = data.name;
    this.image = data.album.images[2].url;
    this.href = data.open_url.spotify;
  }
}
