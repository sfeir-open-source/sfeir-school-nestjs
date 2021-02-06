import { dayOneSLides } from './day-one.js';

function constructSlideFlow(slides) {
  return slides.map(slidePath => ({ path: slidePath }));
}

function sfeirInstitute() {
  const formationSlide = [ ...dayOneSLides() ];
  return constructSlideFlow(formationSlide);
}

export function usedSlides() {
  return sfeirInstitute();
}
