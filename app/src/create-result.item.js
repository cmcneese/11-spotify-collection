export default function (data) {
  const element = document.createElement('div');
  element.classList.add('content-wrapper');

  element.innerHTML = `
  <div class="top-content">
    <div class="left-side">
      <h1 class="show-title">${data.show_title}</h1>
      <p class="category">${data.category}</p>
      <span>
      <h3 class="rating">${data.rating}
        <i class="fa fa-star"></i>
      </h3>
    </span>
    </div>
    <img src="${data.poster}" alt="${data.name}">
        alt="">
  </div>
  <div class="bottom-content">
    <h3>Summary</h3>
    <p class="summary">$</h3>
      <h3>Actors</h3>
      <p class="show_cast">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>`;


  return element;
}
