function scopeInjectionSLides() {
  return [
    '12-injection-scope/01-transition.md',
    '12-injection-scope/02-definition.md',
    '12-injection-scope/03-provider-scope-registration.md',
    '12-injection-scope/04-context-and-request.md',
    '12-injection-scope/100-injection-scope.md',
  ];
}

function lifecycleSlides() {
  return [ '13-lifecycles/01-transition.md', '13-lifecycles/02-introduction.md' ];
}

export function dayTwoSlides() {
  return [
    ...scopeInjectionSLides(),
    ...lifecycleSlides(),
  ];
}
