import 'whatwg-fetch';
import data from './katy.json';
import Model from './app/model';
import View from './app/view';

data.tracks.items.forEach((item) => {
  const model = new Model(item);

  const view = new View(model);

  const results = document.querySelector('.results');
  results.appendChild(view.track);
  view.render();
});
