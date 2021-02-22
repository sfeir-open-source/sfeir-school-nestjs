function introductionSlides() {
  return ["00-school/00-TITLE.md"];
}

function speakerSlides() {
  return ["100-speaker/nicolas-frizzarin.md", "100-speaker/bruno-bellenoue.md"];
}

function configurationSLide() {
  return ["01-setup-env/01-transition.md", "01-setup-env/02-installation.md"];
}

function bootstrapingSlide() {
  return [
    "02-bootstraping/01-transition.md",
    "02-bootstraping/02-bootstrapping.md",
    "02-bootstraping/03-under-hood.md",
    "02-bootstraping/100-exercice-bootstraping.md",
  ];
}

function controllerSlide() {
  return [
    "03-controller/01-transition.md",
    "03-controller/02-definition.md",
    "03-controller/03-handler.md",
    "03-controller/100-exercice-create-controller.md",
  ];
}

function providerSlie() {
  return [
    "04-provider/01-transition.md",
    "04-provider/02-definition.md",
    "04-provider/100-exercice-create-classic-provider.md",
    "04-provider/03-register-way.md",
    "04-provider/101-exercice-create-custom-provider.md",
  ];
}

function moduleSlide() {
  return [
    "05-modules/01-transition.md",
    "05-modules/02-definition.md",
    "05-modules/03-module-types.md",
    "05-modules/100-exercice-module-architecture.md",
  ];
}

export function dayOneSLides() {
  return [
    ...introductionSlides(),
    ...speakerSlides(),
    ...configurationSLide(),
    ...bootstrapingSlide(),
    ...controllerSlide(),
    ...providerSlie(),
    ...moduleSlide(),
  ];
}
