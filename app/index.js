import 'whatwg-fetch';
import data from './data.json';
import View from './Spotify-Track/view';
import Model from './Spotify-Track/model';


data.tracks.items.forEach((item) => {
  const model = new Model(item);
  const view = new View(model);

  const results = document.querySelector('.results');
  results.appendChild(view.track);

  view.render();
});
