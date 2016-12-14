export default class Track {
  constructor(model) {
    this.model = model;

    this.el = document.createElement('div');
    this.el.classList.add('panel-block');
    this.el.classList.add('track');
    this.el.innerHTML = '';
  }
  render() {
    this.el.querySelector('.track__name').innerText = this.model.name;
    this.el.querySelector('.track__artist').innerText = this.model.artist;
    this.el.querySelector('.track__img').src = this.model.image;
    this.el.querySelector('.track__link').href = this.model.href;
  }
}
