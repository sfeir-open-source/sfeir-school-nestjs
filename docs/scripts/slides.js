import { dayOneSLides } from './day-one.js';
import { dayTwoSlides } from './day-two.js';

function constructSlideFlow(slides) {
  return slides.map(slidePath => ({ path: slidePath }));
}

function sfeirInstitute() {
  const formationSlide = [ ...dayOneSLides(), ...dayTwoSlides() ];
  return constructSlideFlow(formationSlide);
}

function sfeirSchoolInitiation() {
  return constructSlideFlow(dayOneSLides());
}

export function usedSlides() {
  return sfeirSchoolInitiation();
}
