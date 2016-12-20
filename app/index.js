import 'whatwg-fetch';
import Data from './data.json';
import View from './Spotify-Track/view';
import Model from './Spotify-Track/model';


json.tracks.items.forEach((item) => {
  const track = new Model(item);
  const view = new View(model);

  const results = document.querySelector('.results');
  results.appendChild(view.track);

  view.render();
});
