function schoolSlides() {
  return ['00-school/00-cover.md', '00-school/01-speaker-bb.md', '00-school/02-slides-link.md'];
}

function introSlides() {
  return ['01-intro/00-getting-started.md', '01-intro/01-what-is-nestjs.md'];
}

function quickStartSlides() {
  return ['02-quick-start/00-nestjs-cli.md', '02-quick-start/01-tools.md'];
}

function architectureSlides() {
  return ['03-architecture/00-architecture.md'];
}

function controllersSlides() {
  return ['04-controllers/00-controllers.md'];
}

function servicesSlides() {
  return ['05-services/00-services.md'];
}

function modulesSlides() {
  return ['06-modules/00-modules.md'];
}

function middlewaresSlides() {
  return ['07-middlewares/00-middlewares.md'];
}

function exceptionsSlides() {
  return ['08-exceptions/00-exceptions.md'];
}

function pipesSlides() {
  return ['09-pipes/00-pipes.md'];
}

function guardsSlides() {
  return ['10-guards/00-guards.md'];
}

function interceptorsSlides() {
  return ['11-interceptors/00-interceptors.md'];
}

function decoratorsSlides() {
  return ['12-decorators/00-custom-decorators.md'];
}

function lifecycleSlides() {
  return ['13-lifecycle/00-lifecycle-events.md'];
}

function typeormSlides() {
  return ['14-typeorm/00-typeorm.md'];
}

function swaggerSlides() {
  return ['15-swagger/00-swagger.md'];
}

function passportSlides() {
  return ['16-passport/00-passport.md'];
}

function securiteSlides() {
  return ['17-securite/00-securite.md'];
}

function exceptionsFiltersSlides() {
  return ['18-exceptions-filters/00-exceptions-filters.md'];
}

function ressourcesSlides() {
  return ['19-ressources/00-ressources.md'];
}

function formation() {
  return [
    ...schoolSlides(),
    ...introSlides(),
    ...quickStartSlides(),
    ...architectureSlides(),
    ...controllersSlides(),
    ...servicesSlides(),
    ...modulesSlides(),
    ...middlewaresSlides(),
    ...exceptionsSlides(),
    ...pipesSlides(),
    ...guardsSlides(),
    ...interceptorsSlides(),
    ...decoratorsSlides(),
    ...lifecycleSlides(),
    ...typeormSlides(),
    ...swaggerSlides(),
    ...securiteSlides(),
    ...exceptionsFiltersSlides(),
    ...passportSlides(),
    ...ressourcesSlides()
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}

