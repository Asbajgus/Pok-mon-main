export class Model {
  constructor() {
    this.player = {
      name: "Peter",
      image: "Png/red.png",
      currency: 500,
      items: { pokeballs: 10, greatballs: 5, ultraballs: 2, potions: 3, berries: 2 },
      pokemon: [
        { pokedexNumber: 131, name: "Lapras", type: ["Water", "Ice"], maxHealth: 130, currentHealth: 130, image: "Png/lapras/Lapras.png", level: 40 }
      ]
    };
    this.randomPokemon = null;
    this.warningMessage = '';
    this.itemDropRate = 0.1;
    this.selectedPokeball = null;
    this.shopItems = [
      { name: "Pokéball", type: "pokeballs", price: 20 },
      { name: "Greatball", type: "greatballs", price: 50 },
      { name: "Ultraball", type: "ultraballs", price: 100 },
      { name: "Potion", type: "potions", price: 30 },
      { name: "Berry", type: "berries", price: 20 }
    ];
    this.itemList = [
      { name: "Potion", type: "potions", chance: 0.5 },
      { name: "Berry", type: "berries", chance: 0.3 },
      { name: "Pokéball", type: "pokeballs", chance: 0.1 },
      { name: "Greatball", type: "greatballs", chance: 0.05 }
    ];
  }

  getRandomPokemon() {
    const pokemonList = [
      { pokedexNumber: 51, name: "Dugtrio", type: ["Ground"], maxHealth: 35, currentHealth: 35, image: "Png/diglett/Dugtrio.png", level: 26 },
      // ...other Pokémon...
    ];
    this.randomPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
  }

  handleItemDrop() {
    if (Math.random() < this.itemDropRate) {
      const randomItem = this.getRandomItem();
      if (randomItem) {
        this.player.items[randomItem.type] = (this.player.items[randomItem.type] || 0) + 1;
        this.warningMessage = `You found a ${randomItem.name}!`;
      }
    }
  }

  getRandomItem() {
    const possibleItems = this.itemList.filter(item => Math.random() < item.chance);
    return possibleItems.length > 0 ? possibleItems[Math.floor(Math.random() * possibleItems.length)] : null;
  }

  buyItem(itemType, price) {
    const item = this.shopItems.find(item => item.type === itemType);
    if (!item) return false;

    if (this.player.currency >= price) {
      this.player.currency -= price;
      this.player.items[itemType] = (this.player.items[itemType] || 0) + 1;
      this.warningMessage = `You bought 1 ${item.name}!`;
      return true;
    } else {
      this.warningMessage = "Not enough currency!";
      return false;
    }
  }
}
