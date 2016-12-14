export default class Track {
  constructor(model) {
    this.model = model;

        // Element Setup
        // <div class="character">
        //   <p class="character__name"></p>
        //   <p class="character__profession"></p>
        //   <p class="character__age"></p>
        // </div>
    this.el = document.createElement('div');
    this.el.classList.add('panel-block');
    this.el.classList.add('track');
    this.el.innerHTML = `
      <div class=".track panel-block">
        <div class="media">
          <div class="media-left">
            <div class="track__frame">
              <img class="track__img"/>
            </div>
          </div>
          <div class="media-content">
            <p class="track__artist"></p>
            <p class="track__name"></p>
          </div>
          <div class="media-right">
          <a class="track__link" target="_blank">
           <span class="fa fa-spotify fa-3x"></span>
          </a>
          </div>
        </div>
      </div>
       `;
  }

  render() {
        // Element Filling - rendering
    this.el.querySelector('.track__name').innerText = this.model.name;
    this.el.querySelector('.track__artist').innerText = this.model.artist;
    this.el.querySelector('.track__img').src = this.model.image;
    this.el.querySelector('.track__link').href = this.model.href;
  }
}
