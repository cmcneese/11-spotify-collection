export default class NetflixResultView {
  constructor(element, model) {
    this.el = element;
    this.model = model;
  }

  render() {
    const showTitle = this.el.querySelector('.show-title');
    showTitle.innerText = this.model.show_title;
    const showCategory = this.el.querySelector('.category');
    showCategory.innerText = this.model.category;
    const showRating = this.el.querySelector('.rating');
    showRating.innerText = this.model.rating;
    const pic = this.el.querySelector('.pic');
    pic.src = this.model.poster;
    const showSummary = this.el.querySelector('.summary');
    showSummary.innerText = this.model.summary;
    const showCast = this.el.querySelector('.show_cast');
    showCast.innerText = this.model.show_cast;
  }
}
