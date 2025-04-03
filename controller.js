export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.model.getRandomPokemon();
    this.updateView();
    this.setupEventListeners();
  }

  updateView() {
    this.view.render({
      randomPokemon: this.model.randomPokemon,
      player: this.model.player,
      warningMessage: this.model.warningMessage
    });
  }

  setupEventListeners() {
    document.addEventListener('click', (event) => {
      const action = event.target.getAttribute('data-action');
      if (!action) return;

      switch (action) {
        case 'catch':
          this.catchPokemon();
          break;
        case 'find-another':
          this.findAnotherPokemon();
          break;
        case 'show-pokemon':
          this.showPokemon();
          break;
        case 'show-bag':
          this.showBag();
          break;
        case 'shop':
          this.openShop();
          break;
      }
    });
  }

  catchPokemon() {
    // Implement catch logic
    this.updateView();
  }

  findAnotherPokemon() {
    this.model.getRandomPokemon();
    this.updateView();
  }

  showPokemon() {
    // Implement show Pokémon logic
    this.updateView();
  }

  showBag() {
    // Implement show bag logic
    this.updateView();
  }

  openShop() {
    // Implement shop logic
    this.updateView();
  }
}
