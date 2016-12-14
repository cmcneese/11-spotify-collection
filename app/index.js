import 'whatwg-fetch';
import data from './data';
import Model from './app/model';
import View from './app/view';

const results = document.querySelector('.results');

json.tracks.items.forEach((item) => {
  const track = new Model(item);
  const view = new View(track);

  results.appendChild(view.el);

  view.render();
});
