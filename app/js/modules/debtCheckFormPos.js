export const debtCheckFormPos = () => {
  const anchorOffset = $(".news-single-page__preview").position().top;

  $(".debt-check-card")
    .css("top", anchorOffset)
    .removeClass("debt-check-card--hidden");
};
