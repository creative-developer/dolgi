export const slider = () => {
  const sliderArrow =
    '<svg class="icon icon--owl-arrow"><use xlink:href="img/svg-sprite.svg#owl-arrow"></use></svg>'
  const newsSlider = $('.news-slider')
  const newsSliderSettings = {
    loop: true,
    items: 3,
    margin: 0,
    nav: true,
    dots: false,
    navText: [sliderArrow, sliderArrow],
  }
  newsSlider.owlCarousel(newsSliderSettings)
}
