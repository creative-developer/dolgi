import { addSelectArrow } from "./select";

export const checkTravelBanSteps = () => {
  const form = $(".check-travel-ban-form");
  const steps = $(".check-travel-ban-form__steps");

  if (form.length) {
    const prevBtn = form.find(".js-prev-step");
    const nextBtn = form.find(".js-next-step");
    const stepTitle = $(".check-travel-ban-form__title");
    const progressLine = $(".check-travel-ban-form__progress-line");

    steps.owlCarousel({
      loop: false,
      items: 1,
      margin: 0,
      nav: false,
      dots: false,
      autoHeight: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      onInitialized: function (event) {
        setTimeout(() => {
          $("select").trigger("refresh");
          setTimeout(() => {
            addSelectArrow();
          }, 1);
        }, 1);

        // progress
        setTimeout(() => {
          progressLine.css("width", `${100 / event.item.count + 1}%`);
        }, 500);

        // go to next step
        nextBtn.click(function () {
          steps.trigger("next.owl.carousel");
        });
        // go to prev step
        prevBtn.click(function () {
          steps.trigger("prev.owl.carousel");
        });
      },
      onTranslate: function (event) {
        let index = event.item.index + 1;

        // step counter
        $(".check-travel-ban-form__steps-counter span").html(index);
        $(".check-travel-ban-form__step-number").html(index);

        // title toggle
        stepTitle.find("span").removeClass("show");
        stepTitle.find(`span:nth-child(${index})`).addClass("show");

        // progress
        progressLine.css("width", `${(100 / event.item.count + 1) * index}%`);
      },
    });

    $('input[name="IHaveCar"]').change(function () {
      const form = $(".i-have-car-form");

      if ($(this).prop("checked")) {
        form.addClass("show");
      } else {
        form.removeClass("show");
      }

      steps.trigger("refresh.owl.carousel");
    });

    $('input[name="sendSms"]').change(function () {
      const form = $(".send-sms-form");

      if ($(this).prop("checked")) {
        form.addClass("show");
      } else {
        form.removeClass("show");
      }

      steps.trigger("refresh.owl.carousel");
    });
  }
};
