import 'whatwg-fetch';
import Data from './data';
import View from './Spotify-Track/view';
import Model from './Spotify-Track/model';

const results = document.querySelector('.results');

json.tracks.items.forEach((item) => {
  const track = new Model(item);
  const view = new View(track);

  results.appendChild(view.el);

  view.render();
});
