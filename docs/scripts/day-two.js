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

function configurationSlide() {
  return [
    '14-configuration/01-transition.md',
    '14-configuration/02-introduction.md',
    '14-configuration/03-configuration.md',
    '14-configuration/04-config-service.md',
    '14-configuration/100-exercice-basics-configuration.md',
    '14-configuration/05-configuration-validation.md',
  ];
}

export function dayTwoSlides() {
  return [
    ...scopeInjectionSLides(),
    ...lifecycleSlides(),
    ...configurationSlide(),
  ];
}
