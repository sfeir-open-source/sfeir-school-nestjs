import { SfeirThemeInitializer } from "../web_modules/sfeir-school-theme/sfeir-school-theme.mjs";
import { dayOneSLides } from "./day-one.js";
import { dayTwoSlides } from "./day-two.js";

const trainingMode = document
  .querySelector(".reveal .slides")
  .getAttribute("data-theme-slides");

function constructSlideFlow(slides) {
  return slides.map((slidePath) => ({ path: slidePath }));
}

function sfeirInstitute() {
  const formationSlide = [...dayOneSLides(), ...dayTwoSlides()];
  return constructSlideFlow(formationSlide);
}

function sfeirSchoolInitiation() {
  return constructSlideFlow(dayOneSLides());
}

trainingMode === "institue"
  ? SfeirThemeInitializer.init(sfeirInstitute)
  : SfeirThemeInitializer.init(sfeirSchoolInitiation);
