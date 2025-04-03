export class View {
  constructor() {
    this.app = document.getElementById("app");
  }

  render(state) {
    const { randomPokemon, player, warningMessage } = state;

    this.app.innerHTML = `
      <div class="container">
        <div class="opposingPokemon">
          <div><strong>${randomPokemon.name}</strong></div>
          <div>Level: ${randomPokemon.level}</div>
          <img src="${randomPokemon.image}" alt="${randomPokemon.name}">
        </div>

        <div class="bottomScreen">
          <div class="player">
            <img src="${player.image}" alt="Player">
            <div>${player.name}</div>
            <div>Currency: $${player.currency}</div>
          </div>

          <div class="buttonContainer outlinedBox">
            <div class="button" data-action="catch">Catch</div>
            <div class="button" data-action="find-another">Find Another</div>
            <div class="button" data-action="show-pokemon">Show Your Pokémon</div>
            <div class="button" data-action="show-bag">Bag</div>
            <div class="button" data-action="shop">Shop</div>
          </div>
        </div>
      </div>
      ${warningMessage ? `<div class="warningMessageBox"><p>${warningMessage}</p></div>` : ''}
    `;
  }
}
