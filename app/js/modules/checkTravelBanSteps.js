import { addSelectArrow } from "./select";

export const checkTravelBanSteps = () => {
  const form = $(".check-travel-ban-form");
  const steps = $(".check-travel-ban-form__steps");
  // const prevBtn = form.find(".js-prev-step");
  // const nextBtn = form.find(".js-next-step");
  // const agreeText = $(".ban-checker__agreement");
  // const footer = $(".ban-checker__footer");
  // const nameDesc = $(".js-desc");

  steps.owlCarousel({
    loop: false,
    items: 1,
    margin: 20,
    nav: false,
    dots: false,
    autoHeight: true,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    onInitialized: function (event) {
      setTimeout(() => {
        $("select").trigger("refresh");
        setTimeout(() => {
          addSelectArrow();
        }, 1);
      }, 1);
      // // add class active
      // footer.addClass("ban-checker__footer--first-step");
      // nameDesc.eq(0).addClass("ban-checker__name-desc--active");
      // // go to next step
      // nextBtn.click(function () {
      //   let currentStep = steps.find(".owl-item.active");
      //   // check validate
      //   if (validateStep(currentStep)) {
      //     steps.trigger("next.owl.carousel");
      //   } else {
      //     console.log("no validate");
      //   }
      // });
      // // go to prev step
      // prevBtn.click(function () {
      //   steps.trigger("prev.owl.carousel");
      // });
      // // add get inn form
      // $(".js-get-inn").click(function (e) {
      //   e.preventDefault();
      //   if (!getInn.getInnFormInit) {
      //     getInn.init(steps);
      //   } else {
      //     getInn.destroy(steps);
      //   }
      // });
      // // check driver license
      // $(".user-data-step__checkbox").change(function () {
      //   let driverLicense = $(".driver-license");
      //   let inputs = ["driverLicense", "vehicleCertificate", "stateSign"];
      //   if ($(this).prop("checked")) {
      //     driverLicense.addClass("visible");
      //     steps.trigger("refresh.owl.carousel");
      //     for (let i = 0; i < inputs.length; i++) {
      //       $('input[name="' + inputs[i] + '"]').rules("add", {
      //         required: true,
      //       });
      //       $('input[name="' + inputs[i] + '"]').removeClass("validate-ignore");
      //     }
      //   } else {
      //     driverLicense.removeClass("visible");
      //     steps.trigger("refresh.owl.carousel");
      //     driverLicense.find("input").val("");
      //     driverLicense.removeAttr("aria-invalid");
      //     for (let i = 0; i < inputs.length; i++) {
      //       $('input[name="' + inputs[i] + '"]').rules("remove");
      //       $('input[name="' + inputs[i] + '"]').addClass("validate-ignore");
      //     }
      //   }
      //   timeline.refresh();
      // });
      // $(".ban-checker-result__checkbox").change(function () {
      //   if ($(this).prop("checked")) {
      //     $(this)
      //       .closest(".ban-checker-result__input-field")
      //       .find('input[type="tel"]')
      //       .prop("disabled", false)
      //       .focus();
      //   } else {
      //     $(this)
      //       .closest(".ban-checker-result__input-field")
      //       .find('input[type="tel"]')
      //       .prop("disabled", true);
      //   }
      // });
      // timeline.init(event);
      // timeline.progress(event, "ban-checker");
    },
    onTranslate: function (event) {
      let index = event.item.index + 1;
      slideCounter(event);
      // timeline.progress(event, "ban-checker");
      // timeline.refresh();
      // footer.removeClass("ban-checker__footer--first-step");
      // nameDesc.removeClass("ban-checker__name-desc--active");
      // if (index === 1 || index === 3) {
      //   prevBtn.hide(300);
      // } else {
      //   prevBtn.show(300);
      // }
      // if (index === 1) {
      //   agreeText.show(300);
      //   footer.addClass("ban-checker__footer--first-step");
      //   nameDesc.eq(index - 1).addClass("ban-checker__name-desc--active");
      // } else {
      //   agreeText.hide(300);
      // }
      // if (index === 2) {
      //   nameDesc.eq(index - 1).addClass("ban-checker__name-desc--active");
      // }
      // if (index === 3) {
      //   footer.hide(300);
      //   nameDesc.eq(index - 1).addClass("ban-checker__name-desc--active");
      // } else {
      //   footer.show(300);
      // }
      // nextBtn.children("span").html(index + 1 > 3 ? 3 : index + 1);
    },
  });
};

const slideCounter = (event) => {
  let index = event.item.index;
  let timelineStep = $(".timeline__step");

  // toggle step dots
  timelineStep.removeClass("timeline__step--progress timeline__step--active");
  for (let i = 0; i < index + 1; i++) {
    timelineStep.eq(i).addClass("timeline__step--progress");
    if ($(event.target).hasClass("user-data-step")) {
      if (i === 1) {
        timelineStep.eq(0).addClass("timeline__step--active");
      } else if (i === 2) {
        timelineStep.eq(1).addClass("timeline__step--active");
        timelineStep.eq(2).addClass("timeline__step--active");
      }
    } else {
      if (i === 1) {
        timelineStep.eq(0).addClass("timeline__step--active");
        timelineStep.eq(1).addClass("timeline__step--active");
      }
    }
  }

  // step counter
  $(".ban-checker__steps-progress").html(index + 1);
};
