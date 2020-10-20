export const slider = () => {
  const sliderArrow =
    '<svg class="icon icon--owl-arrow"><use xlink:href="img/svg-sprite.svg#owl-arrow"></use></svg>'
  const newsSlider = $('.news-slider')
  const servicesCardSlider = $('.services-section__slider')
  const newsSliderSettings = {
    loop: true,
    items: 3,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    navSpeed: 1000,
    navText: [sliderArrow, sliderArrow],
  }
  newsSlider.owlCarousel(newsSliderSettings)
  servicesCardSlider.owlCarousel(newsSliderSettings)
}
