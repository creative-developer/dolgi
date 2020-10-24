const breakpoints = {
  xl: "(max-width: 1199px)",
  lg: "(max-width: 991px)",
  md: "(max-width: 767px)",
  sm: "(max-width: 575px)",
  xsm: "(max-width: 374px)",
};
const MQ = $.mq.action;
export const mediaQueriesInit = () => {
  MQ(
    breakpoints.lg,
    () => {
      // $('.mobile-menu__center-line').append($('.nav'))
    },
    () => {
      // $('.header__col--right').append($('.nav--header'))
    }
  );

  MQ(
    breakpoints.sm,
    () => {
      // news filters horizontal scroll width calc
      $(window).on("load", function () {
        let filtersWidth = 5;

        $(".news-filters__item").each(function (index, item) {
          filtersWidth += $(item).outerWidth(true);
        });

        $(".news-filters__list").css("width", filtersWidth);
      });
    },
    () => {
      // news filters horizontal scroll width calc
      $(".news-filters__list").css("width", "auto");
    }
  );
};
