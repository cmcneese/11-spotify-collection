
export default class Model {

  constructor(track) {
    this.artist = track.artists[0].name;
    this.name = track.name;
    this.image = track.album.images[0].url;
    this.model = track.external_urls.spotify;
  }
}
