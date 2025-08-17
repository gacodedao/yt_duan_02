const sliderTabs = document.querySelectorAll(".slider-tab");

const sliderIndicator = document.querySelectorAll(".slider-indicator");
const updatePagination = (tab, index) => {
  sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
  sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;
};
const swiper = new Swiper(".slider-container", {
  effect: "fade",
  speed: 1300,
  //   autoplay: {
  //     delay: 5000,
  //   },
  navigation: {
    prevEl: "#slide-prev",
    nextEl: "#slide-next",
  },
  on: {
    slideChange: () => {
      const currentTabIndex = [...sliderTabs].indexOf(
        sliderTabs[swiper.activeIndex]
      );
      updatePagination(sliderTabs[swiper.activeIndex], currentTabIndex);
    },
  },
});
sliderTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    swiper.slideTo(index);
    updatePagination(tab, index);
  });
});
updatePagination(sliderTabs[0], 0);
window.addEventListener("resize", () =>
  updatePagination(sliderTabs[swiper.activeIndex], 0)
);
