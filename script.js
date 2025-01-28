let pikachuName = "Pikachu"

let pokemonList = [
  { pokedexNumber: 1, name: "Bulbasaur", type: ["Grass", "Poison"], maxHealth: 45, currentHealth: 45, image: "Png/bulbasaur/Bulbasaur.png", level: 5 },
  { pokedexNumber: 2, name: "Ivysaur", type: ["Grass", "Poison"], maxHealth: 60, currentHealth: 60, image: "Png/bulbasaur/Ivysaur.png", level: 16 },
  { pokedexNumber: 3, name: "Venusaur", type: ["Grass", "Poison"], maxHealth: 80, currentHealth: 80, image: "Png/bulbasaur/Venusaur.png", level: 32 },
  { pokedexNumber: 4, name: "Charmander", type: ["Fire"], maxHealth: 39, currentHealth: 39, image: "Png/charmander/Charmander.png", level: 5 },
  { pokedexNumber: 5, name: "Charmeleon", type: ["Fire"], maxHealth: 58, currentHealth: 58, image: "Png/charmander/Charmeleon.png", level: 16 },
  { pokedexNumber: 6, name: "Charizard", type: ["Fire", "Flying"], maxHealth: 78, currentHealth: 78, image: "Png/charmander/Charizard.png", level: 36 },
  { pokedexNumber: 7, name: "Squirtle", type: ["Water"], maxHealth: 44, currentHealth: 44, image: "Png/squirtle/Squirtle.png", level: 5 },
  { pokedexNumber: 8, name: "Wartortle", type: ["Water"], maxHealth: 59, currentHealth: 59, image: "Png/squirtle/Wartortle.png", level: 16 },
  { pokedexNumber: 9, name: "Blastoise", type: ["Water"], maxHealth: 79, currentHealth: 79, image: "Png/squirtle/Blastoise.png", level: 36 },
  { pokedexNumber: 10, name: "Caterpie", type: ["Bug"], maxHealth: 45, currentHealth: 45, image: "Png/caterpie/Caterpie.png", level: 5 },
  { pokedexNumber: 11, name: "Metapod", type: ["Bug"], maxHealth: 50, currentHealth: 50, image: "Png/caterpie/Metapod.png", level: 10 },
  { pokedexNumber: 12, name: "Butterfree", type: ["Bug", "Flying"], maxHealth: 60, currentHealth: 60, image: "Png/caterpie/Butterfree.png", level: 10 },
  { pokedexNumber: 13, name: "Weedle", type: ["Bug", "Poison"], maxHealth: 40, currentHealth: 40, image: "Png/weedle/Weedle.png", level: 5 },
  { pokedexNumber: 14, name: "Kakuna", type: ["Bug", "Poison"], maxHealth: 45, currentHealth: 45, image: "Png/weedle/Kakuna.png", level: 10 },
  { pokedexNumber: 15, name: "Beedrill", type: ["Bug", "Poison"], maxHealth: 65, currentHealth: 65, image: "Png/weedle/Beedrill.png", level: 10 },
  { pokedexNumber: 16, name: "Pidgey", type: ["Normal", "Flying"], maxHealth: 40, currentHealth: 40, image: "Png/pidgey/Pidgey.png", level: 5 },
  { pokedexNumber: 17, name: "Pidgeotto", type: ["Normal", "Flying"], maxHealth: 63, currentHealth: 63, image: "Png/pidgey/Pidgeotto.png", level: 18 },
  { pokedexNumber: 18, name: "Pidgeot", type: ["Normal", "Flying"], maxHealth: 83, currentHealth: 83, image: "Png/pidgey/Pidgeot.png", level: 36 },
  { pokedexNumber: 19, name: "Rattata", type: ["Normal"], maxHealth: 30, currentHealth: 30, image: "Png/rattata/Rattata.png", level: 5 },
  { pokedexNumber: 20, name: "Raticate", type: ["Normal"], maxHealth: 55, currentHealth: 55, image: "Png/rattata/Raticate.png", level: 20 },
  { pokedexNumber: 21, name: "Spearow", type: ["Normal", "Flying"], maxHealth: 40, currentHealth: 40, image: "Png/spearow/Spearow.png", level: 5 },
  { pokedexNumber: 22, name: "Fearow", type: ["Normal", "Flying"], maxHealth: 65, currentHealth: 65, image: "Png/spearow/Fearow.png", level: 20 },
  { pokedexNumber: 23, name: "Ekans", type: ["Poison"], maxHealth: 35, currentHealth: 35, image: "Png/ekans/Ekans.png", level: 6 },
  { pokedexNumber: 24, name: "Arbok", type: ["Poison"], maxHealth: 60, currentHealth: 60, image: "Png/ekans/Arbok.png", level: 22 },
  { pokedexNumber: 25, name: "Pikachu", type: ["Electric"], maxHealth: 35, currentHealth: 35, image: "Png/pikachu/Pikachu.png", level: 5 },
  { pokedexNumber: 26, name: "Raichu", type: ["Electric"], maxHealth: 60, currentHealth: 60, image: "Png/pikachu/Raichu.png", level: 30 },
  { pokedexNumber: 27, name: "Sandshrew", type: ["Ground"], maxHealth: 50, currentHealth: 50, image: "Png/sandshrew/Sandshrew.png", level: 5 },
  { pokedexNumber: 28, name: "Sandslash", type: ["Ground"], maxHealth: 75, currentHealth: 75, image: "Png/sandshrew/Sandslash.png", level: 22 },
  { pokedexNumber: 29, name: "Nidoran♀", type: ["Poison"], maxHealth: 55, currentHealth: 55, image: "Png/nidoran/Nidoran-f.png", level: 5 },
  { pokedexNumber: 30, name: "Nidorina", type: ["Poison"], maxHealth: 70, currentHealth: 70, image: "Png/nidoran/Nidorina.png", level: 16 },
  { pokedexNumber: 31, name: "Nidoqueen", type: ["Poison", "Ground"], maxHealth: 90, currentHealth: 90, image: "Png/nidoran/Nidoqueen.png", level: 36 },
  { pokedexNumber: 32, name: "Nidoran♂", type: ["Poison"], maxHealth: 46, currentHealth: 46, image: "Png/nidoran/Nidoran-m.png", level: 5 },
  { pokedexNumber: 33, name: "Nidorino", type: ["Poison"], maxHealth: 61, currentHealth: 61, image: "Png/nidoran/Nidorino.png", level: 16 },
  { pokedexNumber: 34, name: "Nidoking", type: ["Poison", "Ground"], maxHealth: 81, currentHealth: 81, image: "Png/nidoran/Nidoking.png", level: 36 },
  { pokedexNumber: 35, name: "Clefairy", type: ["Fairy"], maxHealth: 70, currentHealth: 70, image: "Png/clefairy/Clefairy.png", level: 5 },
  { pokedexNumber: 36, name: "Clefable", type: ["Fairy"], maxHealth: 95, currentHealth: 95, image: "Png/clefairy/Clefable.png", level: 35 },
  { pokedexNumber: 37, name: "Vulpix", type: ["Fire"], maxHealth: 41, currentHealth: 41, image: "Png/vulpix/Vulpix.png", level: 5 },
  { pokedexNumber: 38, name: "Ninetales", type: ["Fire"], maxHealth: 73, currentHealth: 73, image: "Png/vulpix/Ninetales.png", level: 35 },
  { pokedexNumber: 39, name: "Jigglypuff", type: ["Normal", "Fairy"], maxHealth: 115, currentHealth: 115, image: "Png/jigglypuff/Jigglypuff.png", level: 5 },
  { pokedexNumber: 40, name: "Wigglytuff", type: ["Normal", "Fairy"], maxHealth: 140, currentHealth: 140, image: "Png/jigglypuff/Wigglytuff.png", level: 35 },
  { pokedexNumber: 41, name: "Zubat", type: ["Poison", "Flying"], maxHealth: 40, currentHealth: 40, image: "Png/zubat/Zubat.png", level: 5 },
  { pokedexNumber: 42, name: "Golbat", type: ["Poison", "Flying"], maxHealth: 75, currentHealth: 75, image: "Png/zubat/Golbat.png", level: 22 },
  { pokedexNumber: 43, name: "Oddish", type: ["Grass", "Poison"], maxHealth: 45, currentHealth: 45, image: "Png/oddish/Oddish.png", level: 5 },
  { pokedexNumber: 44, name: "Gloom", type: ["Grass", "Poison"], maxHealth: 60, currentHealth: 60, image: "Png/oddish/Gloom.png", level: 21 },
  { pokedexNumber: 45, name: "Vileplume", type: ["Grass", "Poison"], maxHealth: 75, currentHealth: 75, image: "Png/oddish/Vileplume.png", level: 32 },
  { pokedexNumber: 46, name: "Paras", type: ["Bug", "Grass"], maxHealth: 35, currentHealth: 35, image: "Png/paras/Paras.png", level: 5 },
  { pokedexNumber: 47, name: "Parasect", type: ["Bug", "Grass"], maxHealth: 60, currentHealth: 60, image: "Png/paras/Parasect.png", level: 24 },
  { pokedexNumber: 48, name: "Venonat", type: ["Bug", "Poison"], maxHealth: 60, currentHealth: 60, image: "Png/venonat/Venonat.png", level: 5 },
  { pokedexNumber: 49, name: "Venomoth", type: ["Bug", "Poison"], maxHealth: 70, currentHealth: 70, image: "Png/venonat/Venomoth.png", level: 31 },
  { pokedexNumber: 50, name: "Diglett", type: ["Ground"], maxHealth: 10, currentHealth: 10, image: "Png/diglett/Diglett.png", level: 5 },
  { pokedexNumber: 51, name: "Dugtrio", type: ["Ground"], maxHealth: 35, currentHealth: 35, image: "Png/diglett/Dugtrio.png", level: 26 },
  { pokedexNumber: 52, name: "Meowth", type: ["Normal"], maxHealth: 40, currentHealth: 40, image: "Png/meowth/Meowth.png", level: 5 },
  { pokedexNumber: 53, name: "Persian", type: ["Normal"], maxHealth: 65, currentHealth: 65, image: "Png/meowth/Persian.png", level: 28 },
  { pokedexNumber: 54, name: "Psyduck", type: ["Water"], maxHealth: 50, currentHealth: 50, image: "Png/psyduck/Psyduck.png", level: 5 },
  { pokedexNumber: 55, name: "Golduck", type: ["Water"], maxHealth: 80, currentHealth: 80, image: "Png/psyduck/Golduck.png", level: 33 },
  { pokedexNumber: 56, name: "Mankey", type: ["Fighting"], maxHealth: 40, currentHealth: 40, image: "Png/mankey/Mankey.png", level: 5 },
  { pokedexNumber: 57, name: "Primeape", type: ["Fighting"], maxHealth: 65, currentHealth: 65, image: "Png/mankey/Primeape.png", level: 28 },
  { pokedexNumber: 58, name: "Growlithe", type: ["Fire"], maxHealth: 55, currentHealth: 55, image: "Png/growlithe/Growlithe.png", level: 5 },
  { pokedexNumber: 59, name: "Arcanine", type: ["Fire"], maxHealth: 90, currentHealth: 90, image: "Png/growlithe/Arcanine.png", level: 40 },
  { pokedexNumber: 60, name: "Poliwag", type: ["Water"], maxHealth: 40, currentHealth: 40, image: "Png/poliwag/Poliwag.png", level: 5 },
  { pokedexNumber: 61, name: "Poliwhirl", type: ["Water"], maxHealth: 65, currentHealth: 65, image: "Png/poliwag/Poliwhirl.png", level: 25 },
  { pokedexNumber: 62, name: "Poliwrath", type: ["Water"], maxHealth: 90, currentHealth: 90, image: "Png/poliwag/Poliwrath.png", level: 40 },
  { pokedexNumber: 63, name: "Abra", type: ["Psychic"], maxHealth: 25, currentHealth: 25, image: "Png/abra/Abra.png", level: 5 },
  { pokedexNumber: 64, name: "Kadabra", type: ["Psychic"], maxHealth: 40, currentHealth: 40, image: "Png/abra/Kadabra.png", level: 16 },
  { pokedexNumber: 65, name: "Alakazam", type: ["Psychic"], maxHealth: 55, currentHealth: 55, image: "Png/abra/Alakazam.png", level: 36 },
  { pokedexNumber: 66, name: "Machop", type: ["Fighting"], maxHealth: 70, currentHealth: 70, image: "Png/machop/Machop.png", level: 5 },
  { pokedexNumber: 67, name: "Machoke", type: ["Fighting"], maxHealth: 80, currentHealth: 80, image: "Png/machop/Machoke.png", level: 28 },
  { pokedexNumber: 68, name: "Machamp", type: ["Fighting"], maxHealth: 90, currentHealth: 90, image: "Png/machop/Machamp.png", level: 56 },
  { pokedexNumber: 69, name: "Bellsprout", type: ["Grass", "Poison"], maxHealth: 50, currentHealth: 50, image: "Png/bellsprout/Bellsprout.png", level: 5 },
  { pokedexNumber: 70, name: "Weepinbell", type: ["Grass", "Poison"], maxHealth: 65, currentHealth: 65, image: "Png/bellsprout/Weepinbell.png", level: 21 },
  { pokedexNumber: 71, name: "Victreebel", type: ["Grass", "Poison"], maxHealth: 80, currentHealth: 80, image: "Png/bellsprout/Victreebel.png", level: 36 },
  { pokedexNumber: 72, name: "Tentacool", type: ["Water", "Poison"], maxHealth: 40, currentHealth: 40, image: "Png/tentacool/Tentacool.png", level: 5 },
  { pokedexNumber: 73, name: "Tentacruel", type: ["Water", "Poison"], maxHealth: 80, currentHealth: 80, image: "Png/tentacool/Tentacruel.png", level: 30 },
  { pokedexNumber: 74, name: "Geodude", type: ["Rock", "Ground"], maxHealth: 40, currentHealth: 40, image: "Png/geodude/Geodude.png", level: 5 },
  { pokedexNumber: 75, name: "Graveler", type: ["Rock", "Ground"], maxHealth: 55, currentHealth: 55, image: "Png/geodude/Graveler.png", level: 25 },
  { pokedexNumber: 76, name: "Golem", type: ["Rock", "Ground"], maxHealth: 80, currentHealth: 80, image: "Png/geodude/Golem.png", level: 50 },
  { pokedexNumber: 77, name: "Ponyta", type: ["Fire"], maxHealth: 50, currentHealth: 50, image: "Png/ponyta/Ponyta.png", level: 5 },
  { pokedexNumber: 78, name: "Rapidash", type: ["Fire"], maxHealth: 65, currentHealth: 65, image: "Png/ponyta/Rapidash.png", level: 20 },
  { pokedexNumber: 79, name: "Slowpoke", type: ["Water", "Psychic"], maxHealth: 50, currentHealth: 50, image: "Png/slowpoke/Slowpoke.png", level: 5 },
  { pokedexNumber: 80, name: "Slowbro", type: ["Water", "Psychic"], maxHealth: 75, currentHealth: 75, image: "Png/slowpoke/Slowbro.png", level: 37 },
  { pokedexNumber: 81, name: "Magnemite", type: ["Electric", "Steel"], maxHealth: 25, currentHealth: 25, image: "Png/magnemite/Magnemite.png", level: 5 },
  { pokedexNumber: 82, name: "Magneton", type: ["Electric", "Steel"], maxHealth: 50, currentHealth: 50, image: "Png/magnemite/Magneton.png", level: 30 },
  { pokedexNumber: 83, name: "Farfetch'd", type: ["Normal", "Flying"], maxHealth: 52, currentHealth: 52, image: "Png/farfetchd/Farfetchd.png", level: 5 },
  { pokedexNumber: 84, name: "Doduo", type: ["Normal", "Flying"], maxHealth: 35, currentHealth: 35, image: "Png/doduo/Doduo.png", level: 5 },
  { pokedexNumber: 85, name: "Dodrio", type: ["Normal", "Flying"], maxHealth: 60, currentHealth: 60, image: "Png/doduo/Dodrio.png", level: 31 },
  { pokedexNumber: 86, name: "Seel", type: ["Water"], maxHealth: 65, currentHealth: 65, image: "Png/seel/Seel.png", level: 5 },
  { pokedexNumber: 87, name: "Dewgong", type: ["Water", "Ice"], maxHealth: 90, currentHealth: 90, image: "Png/seel/Dewgong.png", level: 34 },
  { pokedexNumber: 88, name: "Grimer", type: ["Poison"], maxHealth: 80, currentHealth: 80, image: "Png/Grimer/Grimer.png", level: 5 },
  { pokedexNumber: 89, name: "Muk", type: ["Poison"], maxHealth: 105, currentHealth: 105, image: "Png/Grimer/Muk.png", level: 38 },
  { pokedexNumber: 90, name: "Shellder", type: ["Water"], maxHealth: 30, currentHealth: 30, image: "Png/shellder/Shellder.png", level: 15 },
  { pokedexNumber: 91, name: "Cloyster", type: ["Water", "Ice"], maxHealth: 50, currentHealth: 50, image: "Png/shellder/Cloyster.png", level: 36 },
  { pokedexNumber: 92, name: "Gastly", type: ["Ghost", "Poison"], maxHealth: 30, currentHealth: 30, image: "Png/gastly/Gastly.png", level: 15 },
  { pokedexNumber: 93, name: "Haunter", type: ["Ghost", "Poison"], maxHealth: 45, currentHealth: 45, image: "Png/gastly/Haunter.png", level: 25 },
  { pokedexNumber: 94, name: "Gengar", type: ["Ghost", "Poison"], maxHealth: 60, currentHealth: 60, image: "Png/gastly/Gengar.png", level: 38 },
  { pokedexNumber: 95, name: "Onix", type: ["Rock", "Ground"], maxHealth: 35, currentHealth: 35, image: "Png/onix/Onix.png", level: 10 },
  { pokedexNumber: 96, name: "Drowzee", type: ["Psychic"], maxHealth: 60, currentHealth: 60, image: "Png/Drowsee/drowzee.png", level: 12 },
  { pokedexNumber: 97, name: "Hypno", type: ["Psychic"], maxHealth: 85, currentHealth: 85, image: "Png/Drowsee/Hypno.png", level: 26 },
  { pokedexNumber: 98, name: "Krabby", type: ["Water"], maxHealth: 30, currentHealth: 30, image: "Png/krabby/Krabby.png", level: 10 },
  { pokedexNumber: 99, name: "Kingler", type: ["Water"], maxHealth: 65, currentHealth: 65, image: "Png/krabby/kingler.png", level: 28 },
  { pokedexNumber: 100, name: "Voltorb", type: ["Electric"], maxHealth: 40, currentHealth: 40, image: "Png/voltorb/Voltorb.png", level: 10 },
  { pokedexNumber: 101, name: "Electrode", type: ["Electric"], maxHealth: 60, currentHealth: 60, image: "Png/voltorb/Electrode.png", level: 30 },
  { pokedexNumber: 102, name: "Exeggcute", type: ["Grass", "Psychic"], maxHealth: 60, currentHealth: 60, image: "Png/exeggcute/Exeggcute.png", level: 15 },
  { pokedexNumber: 103, name: "Exeggutor", type: ["Grass", "Psychic"], maxHealth: 95, currentHealth: 95, image: "Png/exeggcute/Exeggutor.png", level: 36 },
  { pokedexNumber: 104, name: "Cubone", type: ["Ground"], maxHealth: 50, currentHealth: 50, image: "Png/cubone/Cubone.png", level: 10 },
  { pokedexNumber: 105, name: "Marowak", type: ["Ground"], maxHealth: 60, currentHealth: 60, image: "Png/cubone/Marowak.png", level: 28 },
  { pokedexNumber: 106, name: "Hitmonlee", type: ["Fighting"], maxHealth: 50, currentHealth: 50, image: "Png/hitmonlee/Hitmonlee.png", level: 30 },
  { pokedexNumber: 107, name: "Hitmonchan", type: ["Fighting"], maxHealth: 50, currentHealth: 50, image: "Png/hitmonlee/Hitmonchan.png", level: 30 },
  { pokedexNumber: 108, name: "Lickitung", type: ["Normal"], maxHealth: 90, currentHealth: 90, image: "Png/lickitung/Lickitung.png", level: 15 },
  { pokedexNumber: 109, name: "Koffing", type: ["Poison"], maxHealth: 40, currentHealth: 40, image: "Png/koffing/Koffing.png", level: 10 },
  { pokedexNumber: 110, name: "Weezing", type: ["Poison"], maxHealth: 65, currentHealth: 65, image: "Png/koffing/Weezing.png", level: 30 },
  { pokedexNumber: 111, name: "Rhyhorn", type: ["Ground", "Rock"], maxHealth: 80, currentHealth: 80, image: "Png/rhyhorn/Rhyhorn.png", level: 15 },
  { pokedexNumber: 112, name: "Rhydon", type: ["Ground", "Rock"], maxHealth: 105, currentHealth: 105, image: "Png/rhyhorn/Rhydon.png", level: 40 },
  { pokedexNumber: 113, name: "Chansey", type: ["Normal"], maxHealth: 250, currentHealth: 250, image: "Png/chansey/Chansey.png", level: 5 },
  { pokedexNumber: 114, name: "Tangela", type: ["Grass"], maxHealth: 65, currentHealth: 65, image: "Png/tangela/Tangela.png", level: 15 },
  { pokedexNumber: 115, name: "Kangaskhan", type: ["Normal"], maxHealth: 105, currentHealth: 105, image: "Png/kangaskhan/Kangaskhan.png", level: 25 },
  { pokedexNumber: 116, name: "Horsea", type: ["Water"], maxHealth: 30, currentHealth: 30, image: "Png/horsea/Horsea.png", level: 10 },
  { pokedexNumber: 117, name: "Seadra", type: ["Water"], maxHealth: 55, currentHealth: 55, image: "Png/horsea/Seadra.png", level: 32 },
  { pokedexNumber: 118, name: "Goldeen", type: ["Water"], maxHealth: 45, currentHealth: 45, image: "Png/goldeen/Goldeen.png", level: 10 },
  { pokedexNumber: 119, name: "Seaking", type: ["Water"], maxHealth: 65, currentHealth: 65, image: "Png/goldeen/Seaking.png", level: 33 },
  { pokedexNumber: 120, name: "Staryu", type: ["Water"], maxHealth: 30, currentHealth: 30, image: "Png/staryu/Staryu.png", level: 15 },
  { pokedexNumber: 121, name: "Starmie", type: ["Water", "Psychic"], maxHealth: 60, currentHealth: 60, image: "Png/staryu/Starmie.png", level: 40 },
  { pokedexNumber: 122, name: "Mr. Mime", type: ["Psychic", "Fairy"], maxHealth: 40, currentHealth: 40, image: "Png/mrmime/mr-mime.png", level: 20 },
  { pokedexNumber: 123, name: "Scyther", type: ["Bug", "Flying"], maxHealth: 70, currentHealth: 70, image: "Png/scyther/Scyther.png", level: 30 },
  { pokedexNumber: 124, name: "Jynx", type: ["Ice", "Psychic"], maxHealth: 65, currentHealth: 65, image: "Png/jynx/Jynx.png", level: 35 },
  { pokedexNumber: 125, name: "Electabuzz", type: ["Electric"], maxHealth: 60, currentHealth: 60, image: "Png/electabuzz/Electabuzz.png", level: 30 },
  { pokedexNumber: 126, name: "Magmar", type: ["Fire"], maxHealth: 65, currentHealth: 65, image: "Png/magmar/Magmar.png", level: 30 },
  { pokedexNumber: 127, name: "Pinsir", type: ["Bug"], maxHealth: 65, currentHealth: 65, image: "Png/pinsir/Pinsir.png", level: 30 },
  { pokedexNumber: 128, name: "Tauros", type: ["Normal"], maxHealth: 75, currentHealth: 75, image: "Png/tauros/Tauros.png", level: 25 },
  { pokedexNumber: 129, name: "Magikarp", type: ["Water"], maxHealth: 20, currentHealth: 20, image: "Png/magikarp/Magikarp.png", level: 5 },
  { pokedexNumber: 130, name: "Gyarados", type: ["Water", "Flying"], maxHealth: 95, currentHealth: 95, image: "Png/magikarp/Gyarados.png", level: 30 },
  { pokedexNumber: 131, name: "Lapras", type: ["Water", "Ice"], maxHealth: 130, currentHealth: 130, image: "Png/lapras/Lapras.png", level: 40 },
  { pokedexNumber: 132, name: "Ditto", type: ["Normal"], maxHealth: 48, currentHealth: 48, image: "Png/ditto/Ditto.png", level: 10 },
  { pokedexNumber: 133, name: "Eevee", type: ["Normal"], maxHealth: 55, currentHealth: 55, image: "Png/eevee/Eevee.png", level: 5 },
  { pokedexNumber: 134, name: "Vaporeon", type: ["Water"], maxHealth: 130, currentHealth: 130, image: "Png/eevee/Vaporeon.png", level: 20 },
  { pokedexNumber: 135, name: "Jolteon", type: ["Electric"], maxHealth: 65, currentHealth: 65, image: "Png/eevee/Jolteon.png", level: 20 },
  { pokedexNumber: 136, name: "Flareon", type: ["Fire"], maxHealth: 65, currentHealth: 65, image: "Png/eevee/Flareon.png", level: 20 },
  { pokedexNumber: 137, name: "Porygon", type: ["Normal"], maxHealth: 65, currentHealth: 65, image: "Png/porygon/Porygon.png", level: 25 },
  { pokedexNumber: 138, name: "Omanyte", type: ["Rock", "Water"], maxHealth: 35, currentHealth: 35, image: "Png/omanyte/Omanyte.png", level: 10 },
  { pokedexNumber: 139, name: "Omastar", type: ["Rock", "Water"], maxHealth: 70, currentHealth: 70, image: "Png/omanyte/Omastar.png", level: 40 },
  { pokedexNumber: 140, name: "Kabuto", type: ["Rock", "Water"], maxHealth: 40, currentHealth: 40, image: "Png/kabuto/Kabuto.png", level: 10 },
  { pokedexNumber: 141, name: "Kabutops", type: ["Rock", "Water"], maxHealth: 70, currentHealth: 70, image: "Png/kabuto/Kabutops.png", level: 40 },
  { pokedexNumber: 142, name: "Aerodactyl", type: ["Rock", "Flying"], maxHealth: 80, currentHealth: 80, image: "Png/aerodactyl/Aerodactyl.png", level: 40 },
  { pokedexNumber: 143, name: "Snorlax", type: ["Normal"], maxHealth: 160, currentHealth: 160, image: "Png/snorlax/Snorlax.png", level: 50 }
]

let legendaryList = [
  // Legendary Pokémon
  { pokedexNumber: 144, name: "Articuno", type: ["Ice", "Flying"], maxHealth: 90, currentHealth: 90, image: "Png/articuno/Articuno.png", level: 50 },
  { pokedexNumber: 145, name: "Zapdos", type: ["Electric", "Flying"], maxHealth: 90, currentHealth: 90, image: "Png/zapdos/Zapdos.png", level: 50 },
  { pokedexNumber: 146, name: "Moltres", type: ["Fire", "Flying"], maxHealth: 90, currentHealth: 90, image: "Png/moltres/Moltres.png", level: 50 },
  { pokedexNumber: 147, name: "Dratini", type: ["Dragon"], maxHealth: 41, currentHealth: 41, image: "Png/dratini/Dratini.png", level: 5 },
  { pokedexNumber: 148, name: "Dragonair", type: ["Dragon"], maxHealth: 61, currentHealth: 61, image: "Png/dratini/Dragonair.png", level: 30 },
  { pokedexNumber: 149, name: "Dragonite", type: ["Dragon", "Flying"], maxHealth: 91, currentHealth: 91, image: "Png/dratini/Dragonite.png", level: 55 },
  { pokedexNumber: 150, name: "Mewtwo", type: ["Psychic"], maxHealth: 106, currentHealth: 106, image: "Png/mew/Mewtwo.png", level: 70 },
  { pokedexNumber: 151, name: "Mew", type: ["Psychic"], maxHealth: 100, currentHealth: 100, image: "Png/mew/Mew.png", level: 5 }
]

let shinyList = [
  { pokedexNumber: 1, name: "✨Bulbasaur✨", type: ["Grass", "Poison"], maxHealth: 45, currentHealth: 45, image: "shiny/bulbasaur/Bulbasaur.png", level: 5 },
  { pokedexNumber: 2, name: "✨Ivysaur✨", type: ["Grass", "Poison"], maxHealth: 60, currentHealth: 60, image: "shiny/ivysaur/Ivysaur.png", level: 16 },
  { pokedexNumber: 3, name: "✨Venusaur✨", type: ["Grass", "Poison"], maxHealth: 80, currentHealth: 80, image: "shiny/venusaur/Venusaur.png", level: 32 },
  { pokedexNumber: 4, name: "✨Charmander✨", type: ["Fire"], maxHealth: 39, currentHealth: 39, image: "shiny/charmander/Charmander.png", level: 5 },
  { pokedexNumber: 5, name: "✨Charmeleon✨", type: ["Fire"], maxHealth: 58, currentHealth: 58, image: "shiny/charmeleon/Charmeleon.png", level: 16 },
  { pokedexNumber: 6, name: "✨Charizard✨", type: ["Fire", "Flying"], maxHealth: 78, currentHealth: 78, image: "shiny/charizard/Charizard.png", level: 36 },
  { pokedexNumber: 7, name: "✨Squirtle✨", type: ["Water"], maxHealth: 44, currentHealth: 44, image: "shiny/squirtle/Squirtle.png", level: 5 },
  { pokedexNumber: 8, name: "✨Wartortle✨", type: ["Water"], maxHealth: 59, currentHealth: 59, image: "shiny/wartortle/Wartortle.png", level: 16 },
  { pokedexNumber: 9, name: "✨Blastoise✨", type: ["Water"], maxHealth: 79, currentHealth: 79, image: "shiny/blastoise/Blastoise.png", level: 36 },
  { pokedexNumber: 10, name: "✨Caterpie✨", type: ["Bug"], maxHealth: 45, currentHealth: 45, image: "shiny/caterpie/Caterpie.png", level: 3 },
  { pokedexNumber: 11, name: "✨Metapod✨", type: ["Bug"], maxHealth: 50, currentHealth: 50, image: "shiny/metapod/Metapod.png", level: 7 },
  { pokedexNumber: 12, name: "✨Butterfree✨", type: ["Bug", "Flying"], maxHealth: 60, currentHealth: 60, image: "shiny/butterfree/Butterfree.png", level: 10 },
  { pokedexNumber: 13, name: "✨Weedle✨", type: ["Bug", "Poison"], maxHealth: 40, currentHealth: 40, image: "shiny/weedle/Weedle.png", level: 3 },
  { pokedexNumber: 14, name: "✨Kakuna✨", type: ["Bug", "Poison"], maxHealth: 45, currentHealth: 45, image: "shiny/kakuna/Kakuna.png", level: 7 },
  { pokedexNumber: 15, name: "✨Beedrill✨", type: ["Bug", "Poison"], maxHealth: 65, currentHealth: 65, image: "shiny/beedrill/Beedrill.png", level: 10 },
  { pokedexNumber: 16, name: "✨Pidgey✨", type: ["Normal", "Flying"], maxHealth: 40, currentHealth: 40, image: "shiny/pidgey/Pidgey.png", level: 2 },
  { pokedexNumber: 17, name: "✨Pidgeotto✨", type: ["Normal", "Flying"], maxHealth: 63, currentHealth: 63, image: "shiny/pidgeotto/Pidgeotto.png", level: 18 },
  { pokedexNumber: 18, name: "✨Pidgeot✨", type: ["Normal", "Flying"], maxHealth: 83, currentHealth: 83, image: "shiny/pidgeot/Pidgeot.png", level: 36 },
  { pokedexNumber: 19, name: "✨Rattata✨", type: ["Normal"], maxHealth: 30, currentHealth: 30, image: "shiny/rattata/Rattata.png", level: 2 },
  { pokedexNumber: 20, name: "✨Raticate✨", type: ["Normal"], maxHealth: 55, currentHealth: 55, image: "shiny/raticate/Raticate.png", level: 20 },
  { pokedexNumber: 21, name: "✨Spearow✨", type: ["Normal", "Flying"], maxHealth: 40, currentHealth: 40, image: "shiny/spearow/Spearow.png", level: 2 },
  { pokedexNumber: 22, name: "✨Fearow✨", type: ["Normal", "Flying"], maxHealth: 65, currentHealth: 65, image: "shiny/fearow/Fearow.png", level: 20 },
  { pokedexNumber: 23, name: "✨Ekans✨", type: ["Poison"], maxHealth: 35, currentHealth: 35, image: "shiny/ekans/Ekans.png", level: 5 },
  { pokedexNumber: 24, name: "✨Arbok✨", type: ["Poison"], maxHealth: 60, currentHealth: 60, image: "shiny/arbok/Arbok.png", level: 22 },
  { pokedexNumber: 25, name: "✨Pikachu✨", type: ["Electric"], maxHealth: 35, currentHealth: 35, image: "shiny/pikachu/Pikachu.png", level: 5 },
  { pokedexNumber: 26, name: "✨Raichu✨", type: ["Electric"], maxHealth: 60, currentHealth: 60, image: "shiny/raichu/Raichu.png", level: 26 },
  { pokedexNumber: 27, name: "✨Sandshrew✨", type: ["Ground"], maxHealth: 50, currentHealth: 50, image: "shiny/sandshrew/Sandshrew.png", level: 5 },
  { pokedexNumber: 28, name: "✨Sandslash✨", type: ["Ground"], maxHealth: 75, currentHealth: 75, image: "shiny/sandslash/Sandslash.png", level: 22 },
  { pokedexNumber: 29, name: "✨Nidoran♀✨", type: ["Poison"], maxHealth: 55, currentHealth: 55, image: "shiny/nidoran♀/Nidoran♀.png", level: 5 },
  { pokedexNumber: 30, name: "✨Nidorina✨", type: ["Poison"], maxHealth: 70, currentHealth: 70, image: "shiny/nidorina/Nidorina.png", level: 16 },
  { pokedexNumber: 31, name: "✨Nidoqueen✨", type: ["Poison", "Ground"], maxHealth: 90, currentHealth: 90, image: "shiny/nidoqueen/Nidoqueen.png", level: 36 },
  { pokedexNumber: 32, name: "✨Nidoran♂✨", type: ["Poison"], maxHealth: 46, currentHealth: 46, image: "shiny/nidoran♂/Nidoran♂.png", level: 5 },
  { pokedexNumber: 33, name: "✨Nidorino✨", type: ["Poison"], maxHealth: 61, currentHealth: 61, image: "shiny/nidorino/Nidorino.png", level: 16 },
  { pokedexNumber: 34, name: "✨Nidoking✨", type: ["Poison", "Ground"], maxHealth: 81, currentHealth: 81, image: "shiny/nidoking/Nidoking.png", level: 36 },
  { pokedexNumber: 35, name: "✨Clefairy✨", type: ["Fairy"], maxHealth: 70, currentHealth: 70, image: "shiny/clefairy/Clefairy.png", level: 5 },
  { pokedexNumber: 36, name: "✨Clefable✨", type: ["Fairy"], maxHealth: 95, currentHealth: 95, image: "shiny/clefable/Clefable.png", level: 36 },
  { pokedexNumber: 37, name: "✨Vulpix✨", type: ["Fire"], maxHealth: 38, currentHealth: 38, image: "shiny/vulpix/Vulpix.png", level: 5 },
  { pokedexNumber: 38, name: "✨Ninetales✨", type: ["Fire"], maxHealth: 73, currentHealth: 73, image: "shiny/ninetales/Ninetales.png", level: 36 },
  { pokedexNumber: 39, name: "✨Jigglypuff✨", type: ["Normal", "Fairy"], maxHealth: 115, currentHealth: 115, image: "shiny/jigglypuff/Jigglypuff.png", level: 5 },
  { pokedexNumber: 40, name: "✨Wigglytuff✨", type: ["Normal", "Fairy"], maxHealth: 140, currentHealth: 140, image: "shiny/wigglytuff/Wigglytuff.png", level: 36 },
  { pokedexNumber: 41, name: "✨Zubat✨", type: ["Poison", "Flying"], maxHealth: 40, currentHealth: 40, image: "shiny/zubat/Zubat.png", level: 5 },
  { pokedexNumber: 42, name: "✨Golbat✨", type: ["Poison", "Flying"], maxHealth: 75, currentHealth: 75, image: "shiny/golbat/Golbat.png", level: 22 },
  { pokedexNumber: 43, name: "✨Oddish✨", type: ["Grass", "Poison"], maxHealth: 45, currentHealth: 45, image: "shiny/oddish/Oddish.png", level: 5 },
  { pokedexNumber: 44, name: "✨Gloom✨", type: ["Grass", "Poison"], maxHealth: 60, currentHealth: 60, image: "shiny/gloom/Gloom.png", level: 21 },
  { pokedexNumber: 45, name: "✨Vileplume✨", type: ["Grass", "Poison"], maxHealth: 75, currentHealth: 75, image: "shiny/vileplume/Vileplume.png", level: 36 },
  { pokedexNumber: 46, name: "✨Paras✨", type: ["Bug", "Grass"], maxHealth: 35, currentHealth: 35, image: "shiny/paras/Paras.png", level: 5 },
  { pokedexNumber: 47, name: "✨Parasect✨", type: ["Bug", "Grass"], maxHealth: 60, currentHealth: 60, image: "shiny/parasect/Parasect.png", level: 24 },
  { pokedexNumber: 48, name: "✨Venonat✨", type: ["Bug", "Poison"], maxHealth: 60, currentHealth: 60, image: "shiny/venonat/Venonat.png", level: 5 },
  { pokedexNumber: 49, name: "✨Venomoth✨", type: ["Bug", "Poison"], maxHealth: 70, currentHealth: 70, image: "shiny/venomoth/Venomoth.png", level: 31 },
  { pokedexNumber: 50, name: "✨Diglett✨", type: ["Ground"], maxHealth: 10, currentHealth: 10, image: "shiny/diglett/Diglett.png", level: 5 },
  { pokedexNumber: 51, name: "✨Dugtrio✨", type: ["Ground"], maxHealth: 35, currentHealth: 35, image: "png/Dugtrio/Dugtrio.png", level: 26 },
  { pokedexNumber: 52, name: "✨Meowth✨", type: ["Normal"], maxHealth: 40, currentHealth: 40, image: "Shiny/meowth/Meowth.png", level: 5 },
  { pokedexNumber: 53, name: "✨Persian✨", type: ["Normal"], maxHealth: 65, currentHealth: 65, image: "Shiny/meowth/Persian.png", level: 28 },
  { pokedexNumber: 54, name: "✨Psyduck✨", type: ["Water"], maxHealth: 50, currentHealth: 50, image: "Shiny/psyduck/Psyduck.png", level: 5 },
  { pokedexNumber: 55, name: "✨Golduck✨", type: ["Water"], maxHealth: 80, currentHealth: 80, image: "Shiny/psyduck/Golduck.png", level: 33 },
  { pokedexNumber: 56, name: "✨Mankey✨", type: ["Fighting"], maxHealth: 40, currentHealth: 40, image: "Shiny/mankey/Mankey.png", level: 5 },
  { pokedexNumber: 57, name: "✨Primeape✨", type: ["Fighting"], maxHealth: 65, currentHealth: 65, image: "Shiny/mankey/Primeape.png", level: 28 },
  { pokedexNumber: 58, name: "✨Growlithe✨", type: ["Fire"], maxHealth: 55, currentHealth: 55, image: "Shiny/growlithe/Growlithe.png", level: 5 },
  { pokedexNumber: 59, name: "✨Arcanine✨", type: ["Fire"], maxHealth: 90, currentHealth: 90, image: "Shiny/growlithe/Arcanine.png", level: 40 },
  { pokedexNumber: 60, name: "✨Poliwag✨", type: ["Water"], maxHealth: 40, currentHealth: 40, image: "Shiny/poliwag/Poliwag.png", level: 5 },
  { pokedexNumber: 61, name: "✨Poliwhirl✨", type: ["Water"], maxHealth: 65, currentHealth: 65, image: "Shiny/poliwag/Poliwhirl.png", level: 25 },
  { pokedexNumber: 62, name: "✨Poliwrath✨", type: ["Water", "Fighting"], maxHealth: 90, currentHealth: 90, image: "Shiny/poliwag/Poliwrath.png", level: 40 },
  { pokedexNumber: 63, name: "✨Abra✨", type: ["Psychic"], maxHealth: 25, currentHealth: 25, image: "Shiny/abra/Abra.png", level: 5 },
  { pokedexNumber: 64, name: "✨Kadabra✨", type: ["Psychic"], maxHealth: 40, currentHealth: 40, image: "Shiny/abra/Kadabra.png", level: 16 },
  { pokedexNumber: 65, name: "✨Alakazam✨", type: ["Psychic"], maxHealth: 55, currentHealth: 55, image: "Shiny/abra/Alakazam.png", level: 36 },
  { pokedexNumber: 66, name: "✨Machop✨", type: ["Fighting"], maxHealth: 70, currentHealth: 70, image: "Shiny/machop/Machop.png", level: 5 },
  { pokedexNumber: 67, name: "✨Machoke✨", type: ["Fighting"], maxHealth: 80, currentHealth: 80, image: "Shiny/machop/Machoke.png", level: 28 },
  { pokedexNumber: 68, name: "✨Machamp✨", type: ["Fighting"], maxHealth: 90, currentHealth: 90, image: "Shiny/machop/Machamp.png", level: 56 },
  { pokedexNumber: 69, name: "✨Bellsprout✨", type: ["Grass", "Poison"], maxHealth: 50, currentHealth: 50, image: "Shiny/bellsprout/Bellsprout.png", level: 5 },
  { pokedexNumber: 70, name: "✨Weepinbell✨", type: ["Grass", "Poison"], maxHealth: 65, currentHealth: 65, image: "Shiny/bellsprout/Weepinbell.png", level: 21 },
  { pokedexNumber: 71, name: "✨Victreebel✨", type: ["Grass", "Poison"], maxHealth: 80, currentHealth: 80, image: "Shiny/bellsprout/Victreebel.png", level: 36 },
  { pokedexNumber: 72, name: "✨Tentacool✨", type: ["Water", "Poison"], maxHealth: 40, currentHealth: 40, image: "Shiny/tentacool/Tentacool.png", level: 5 },
  { pokedexNumber: 73, name: "✨Tentacruel✨", type: ["Water", "Poison"], maxHealth: 80, currentHealth: 80, image: "Shiny/tentacool/Tentacruel.png", level: 30 },
  { pokedexNumber: 74, name: "✨Geodude✨", type: ["Rock", "Ground"], maxHealth: 40, currentHealth: 40, image: "Shiny/geodude/Geodude.png", level: 5 },
  { pokedexNumber: 75, name: "✨Graveler✨", type: ["Rock", "Ground"], maxHealth: 55, currentHealth: 55, image: "Shiny/geodude/Graveler.png", level: 25 },
  { pokedexNumber: 76, name: "✨Golem✨", type: ["Rock", "Ground"], maxHealth: 80, currentHealth: 80, image: "Shiny/geodude/Golem.png", level: 50 },
  { pokedexNumber: 77, name: "✨Ponyta✨", type: ["Fire"], maxHealth: 50, currentHealth: 50, image: "Shiny/ponyta/Ponyta.png", level: 5 },
  { pokedexNumber: 78, name: "✨Rapidash✨", type: ["Fire"], maxHealth: 65, currentHealth: 65, image: "Shiny/ponyta/Rapidash.png", level: 20 },
  { pokedexNumber: 79, name: "✨Slowpoke✨", type: ["Water", "Psychic"], maxHealth: 90, currentHealth: 90, image: "Shiny/slowpoke/Slowpoke.png", level: 5 },
  { pokedexNumber: 80, name: "✨Slowbro✨", type: ["Water", "Psychic"], maxHealth: 95, currentHealth: 95, image: "Shiny/slowpoke/Slowbro.png", level: 37 },
  { pokedexNumber: 81, name: "✨Magnemite✨", type: ["Electric", "Steel"], maxHealth: 25, currentHealth: 25, image: "Shiny/magnemite/Magnemite.png", level: 5 },
  { pokedexNumber: 82, name: "✨Magneton✨", type: ["Electric", "Steel"], maxHealth: 50, currentHealth: 50, image: "Shiny/magnemite/Magneton.png", level: 30 },
  { pokedexNumber: 83, name: "✨Farfetch'd✨", type: ["Normal", "Flying"], maxHealth: 52, currentHealth: 52, image: "Shiny/farfetchd/Farfetchd.png", level: 20 },
  { pokedexNumber: 84, name: "✨Doduo✨", type: ["Normal", "Flying"], maxHealth: 35, currentHealth: 35, image: "Shiny/doduo/Doduo.png", level: 5 },
  { pokedexNumber: 85, name: "✨Dodrio✨", type: ["Normal", "Flying"], maxHealth: 60, currentHealth: 60, image: "Shiny/doduo/Dodrio.png", level: 31 },
  { pokedexNumber: 86, name: "✨Seel✨", type: ["Water"], maxHealth: 65, currentHealth: 65, image: "Shiny/seel/Seel.png", level: 5 },
  { pokedexNumber: 87, name: "✨Dewgong✨", type: ["Water", "Ice"], maxHealth: 90, currentHealth: 90, image: "Shiny/seel/Dewgong.png", level: 34 },
  { pokedexNumber: 88, name: "✨Grimer✨", type: ["Poison"], maxHealth: 80, currentHealth: 80, image: "Shiny/Grimer/Grimer.png", level: 5 },
  { pokedexNumber: 89, name: "✨Muk✨", type: ["Poison"], maxHealth: 105, currentHealth: 105, image: "Shiny/Grimer/Muk.png", level: 38 },
  { pokedexNumber: 90, name: "✨Shellder✨", type: ["Water"], maxHealth: 30, currentHealth: 30, image: "Shiny/shellder/Shellder.png", level: 5 },
  { pokedexNumber: 91, name: "✨Cloyster✨", type: ["Water", "Ice"], maxHealth: 50, currentHealth: 50, image: "Shiny/shellder/Cloyster.png", level: 30 },
  { pokedexNumber: 92, name: "✨Gastly✨", type: ["Ghost", "Poison"], maxHealth: 30, currentHealth: 30, image: "Shiny/gastly/Gastly.png", level: 5 },
  { pokedexNumber: 93, name: "✨Haunter✨", type: ["Ghost", "Poison"], maxHealth: 45, currentHealth: 45, image: "Shiny/gastly/Haunter.png", level: 25 },
  { pokedexNumber: 94, name: "✨Gengar✨", type: ["Ghost", "Poison"], maxHealth: 60, currentHealth: 60, image: "Shiny/gastly/Gengar.png", level: 40 },
  { pokedexNumber: 95, name: "✨Onix✨", type: ["Rock", "Ground"], maxHealth: 35, currentHealth: 35, image: "Shiny/onix/Onix.png", level: 5 },
  { pokedexNumber: 96, name: "✨Drowzee✨", type: ["Psychic"], maxHealth: 60, currentHealth: 60, image: "Shiny/Drowzee/Drowzee.png", level: 5 },
  { pokedexNumber: 97, name: "✨Hypno✨", type: ["Psychic"], maxHealth: 85, currentHealth: 85, image: "Shiny/Drowzee/Hypno.png", level: 26 },
  { pokedexNumber: 98, name: "✨Krabby✨", type: ["Water"], maxHealth: 30, currentHealth: 30, image: "Shiny/krabby/Krabby.png", level: 5 },
  { pokedexNumber: 99, name: "✨Kingler✨", type: ["Water"], maxHealth: 55, currentHealth: 55, image: "Shiny/krabby/Kingler.png", level: 28 },
  { pokedexNumber: 100, name: "✨Voltorb✨", type: ["Electric"], maxHealth: 40, currentHealth: 40, image: "Shiny/voltorb/Voltorb.png", level: 5 },
  { pokedexNumber: 101, name: "✨Electrode✨", type: ["Electric"], maxHealth: 60, currentHealth: 60, image: "Shiny/voltorb/Electrode.png", level: 30 },
  { pokedexNumber: 102, name: "✨Exeggcute✨", type: ["Grass", "Psychic"], maxHealth: 60, currentHealth: 60, image: "Shiny/exeggcute/Exeggcute.png", level: 5 },
  { pokedexNumber: 103, name: "✨Exeggutor✨", type: ["Grass", "Psychic"], maxHealth: 95, currentHealth: 95, image: "Shiny/exeggcute/Exeggutor.png", level: 35 },
  { pokedexNumber: 104, name: "✨Cubone✨", type: ["Ground"], maxHealth: 50, currentHealth: 50, image: "Shiny/cubone/Cubone.png", level: 5 },
  { pokedexNumber: 105, name: "✨Marowak✨", type: ["Ground"], maxHealth: 60, currentHealth: 60, image: "Shiny/cubone/Marowak.png", level: 28 },
  { pokedexNumber: 106, name: "✨Hitmonlee✨", type: ["Fighting"], maxHealth: 50, currentHealth: 50, image: "Shiny/hitmonlee/Hitmonlee.png", level: 20 },
  { pokedexNumber: 107, name: "✨Hitmonchan✨", type: ["Fighting"], maxHealth: 50, currentHealth: 50, image: "Shiny/hitmonlee/Hitmonchan.png", level: 20 },
  { pokedexNumber: 108, name: "✨Lickitung✨", type: ["Normal"], maxHealth: 90, currentHealth: 90, image: "Shiny/lickitung/Lickitung.png", level: 5 },
  { pokedexNumber: 109, name: "✨Koffing✨", type: ["Poison"], maxHealth: 40, currentHealth: 40, image: "Shiny/koffing/Koffing.png", level: 5 },
  { pokedexNumber: 110, name: "✨Weezing✨", type: ["Poison"], maxHealth: 65, currentHealth: 65, image: "Shiny/koffing/Weezing.png", level: 35 },
  { pokedexNumber: 111, name: "✨Rhyhorn✨", type: ["Ground", "Rock"], maxHealth: 80, currentHealth: 80, image: "Shiny/rhyhorn/Rhyhorn.png", level: 5 },
  { pokedexNumber: 112, name: "✨Rhydon✨", type: ["Ground", "Rock"], maxHealth: 105, currentHealth: 105, image: "Shiny/rhyhorn/Rhydon.png", level: 30 },
  { pokedexNumber: 113, name: "✨Chansey✨", type: ["Normal"], maxHealth: 250, currentHealth: 250, image: "Shiny/chansey/Chansey.png", level: 5 },
  { pokedexNumber: 114, name: "✨Tangela✨", type: ["Grass"], maxHealth: 65, currentHealth: 65, image: "Shiny/tangela/Tangela.png", level: 5 },
  { pokedexNumber: 115, name: "✨Kangaskhan✨", type: ["Normal"], maxHealth: 105, currentHealth: 105, image: "Shiny/kangaskhan/Kangaskhan.png", level: 5 },
  { pokedexNumber: 116, name: "✨Horsea✨", type: ["Water"], maxHealth: 30, currentHealth: 30, image: "Shiny/horsea/Horsea.png", level: 5 },
  { pokedexNumber: 117, name: "✨Seadra✨", type: ["Water"], maxHealth: 55, currentHealth: 55, image: "Shiny/horsea/Seadra.png", level: 32 },
  { pokedexNumber: 118, name: "✨Goldeen✨", type: ["Water"], maxHealth: 45, currentHealth: 45, image: "Shiny/goldeen/Goldeen.png", level: 5 },
  { pokedexNumber: 119, name: "✨Seaking✨", type: ["Water"], maxHealth: 80, currentHealth: 80, image: "Shiny/goldeen/Seaking.png", level: 33 },
  { pokedexNumber: 120, name: "✨Staryu✨", type: ["Water"], maxHealth: 30, currentHealth: 30, image: "Shiny/staryu/Staryu.png", level: 5 },
  { pokedexNumber: 121, name: "✨Starmie✨", type: ["Water", "Psychic"], maxHealth: 60, currentHealth: 60, image: "Shiny/staryu/Starmie.png", level: 36 },
  { pokedexNumber: 122, name: "✨Mr. Mime✨", type: ["Psychic", "Fairy"], maxHealth: 40, currentHealth: 40, image: "Shiny/mr.mime/Mr.Mime.png", level: 5 },
  { pokedexNumber: 123, name: "✨Scyther✨", type: ["Bug", "Flying"], maxHealth: 70, currentHealth: 70, image: "Shiny/scyther/Scyther.png", level: 5 },
  { pokedexNumber: 124, name: "✨Jynx✨", type: ["Ice", "Psychic"], maxHealth: 65, currentHealth: 65, image: "Shiny/jynx/Jynx.png", level: 5 },
  { pokedexNumber: 125, name: "✨Electabuzz✨", type: ["Electric"], maxHealth: 65, currentHealth: 65, image: "Shiny/electabuzz/Electabuzz.png", level: 5 },
  { pokedexNumber: 126, name: "✨Magmar✨", type: ["Fire"], maxHealth: 65, currentHealth: 65, image: "Shiny/magmar/Magmar.png", level: 5 },
  { pokedexNumber: 127, name: "✨Pinsir✨", type: ["Bug"], maxHealth: 65, currentHealth: 65, image: "Shiny/pinsir/Pinsir.png", level: 5 },
  { pokedexNumber: 128, name: "✨Tauros✨", type: ["Normal"], maxHealth: 75, currentHealth: 75, image: "Shiny/tauros/Tauros.png", level: 5 },
  { pokedexNumber: 129, name: "✨Magikarp✨", type: ["Water"], maxHealth: 20, currentHealth: 20, image: "Shiny/magikarp/Magikarp.png", level: 5 },
  { pokedexNumber: 130, name: "✨Gyarados✨", type: ["Water", "Flying"], maxHealth: 95, currentHealth: 95, image: "Shiny/magikarp/Gyarados.png", level: 20 },
  { pokedexNumber: 131, name: "✨Lapras✨", type: ["Water", "Ice"], maxHealth: 130, currentHealth: 130, image: "Shiny/lapras/Lapras.png", level: 5 },
  { pokedexNumber: 132, name: "✨Ditto✨", type: ["Normal"], maxHealth: 48, currentHealth: 48, image: "Shiny/ditto/Ditto.png", level: 5 },
  { pokedexNumber: 133, name: "✨Eevee✨", type: ["Normal"], maxHealth: 55, currentHealth: 55, image: "Shiny/eevee/Eevee.png", level: 5 },
  { pokedexNumber: 134, name: "✨Vaporeon✨", type: ["Water"], maxHealth: 130, currentHealth: 130, image: "Shiny/eevee/Vaporeon.png", level: 36 },
  { pokedexNumber: 135, name: "✨Jolteon✨", type: ["Electric"], maxHealth: 65, currentHealth: 65, image: "Shiny/eevee/Jolteon.png", level: 36 },
  { pokedexNumber: 136, name: "✨Flareon✨", type: ["Fire"], maxHealth: 65, currentHealth: 65, image: "Shiny/eevee/Flareon.png", level: 36 },
  { pokedexNumber: 137, name: "✨Porygon✨", type: ["Normal"], maxHealth: 65, currentHealth: 65, image: "Shiny/porygon/Porygon.png", level: 5 },
  { pokedexNumber: 138, name: "✨Omanyte✨", type: ["Rock", "Water"], maxHealth: 35, currentHealth: 35, image: "Shiny/omanyte/Omanyte.png", level: 5 },
  { pokedexNumber: 139, name: "✨Omastar✨", type: ["Rock", "Water"], maxHealth: 70, currentHealth: 70, image: "Shiny/omanyte/Omastar.png", level: 40 },
  { pokedexNumber: 140, name: "✨Kabuto✨", type: ["Rock", "Water"], maxHealth: 30, currentHealth: 30, image: "Shiny/kabuto/Kabuto.png", level: 5 },
  { pokedexNumber: 141, name: "✨Kabutops✨", type: ["Rock", "Water"], maxHealth: 60, currentHealth: 60, image: "Shiny/kabuto/Kabutops.png", level: 40 },
  { pokedexNumber: 142, name: "✨Aerodactyl✨", type: ["Rock", "Flying"], maxHealth: 80, currentHealth: 80, image: "Shiny/aerodactyl/Aerodactyl.png", level: 5 },
  { pokedexNumber: 143, name: "✨Snorlax✨", type: ["Normal"], maxHealth: 160, currentHealth: 160, image: "Shiny/snorlax/Snorlax.png", level: 5 },
  { pokedexNumber: 144, name: "✨Articuno✨", type: ["Ice", "Flying"], maxHealth: 90, currentHealth: 90, image: "Shiny/articuno/Articuno.png", level: 50 },
  { pokedexNumber: 145, name: "✨Zapdos✨", type: ["Electric", "Flying"], maxHealth: 90, currentHealth: 90, image: "Shiny/zapdos/Zapdos.png", level: 50 },
  { pokedexNumber: 146, name: "✨Moltres✨", type: ["Fire", "Flying"], maxHealth: 90, currentHealth: 90, image: "Shiny/moltres/Moltres.png", level: 50 },
  { pokedexNumber: 147, name: "✨Dratini✨", type: ["Dragon"], maxHealth: 41, currentHealth: 41, image: "Shiny/dratini/Dratini.png", level: 5 },
  { pokedexNumber: 148, name: "✨Dragonair✨", type: ["Dragon"], maxHealth: 61, currentHealth: 61, image: "Shiny/dratini/Dragonair.png", level: 30 },
  { pokedexNumber: 149, name: "✨Dragonite✨", type: ["Dragon", "Flying"], maxHealth: 91, currentHealth: 91, image: "Shiny/dratini/Dragonite.png", level: 55 },
  { pokedexNumber: 150, name: "✨Mewtwo✨", type: ["Psychic"], maxHealth: 106, currentHealth: 106, image: "Shiny/mewtwo/Mewtwo.png", level: 70 },
  { pokedexNumber: 151, name: "✨Mew✨", type: ["Psychic"], maxHealth: 100, currentHealth: 100, image: "Shiny/mew/Mew.png", level: 5 }
]

let possiblePokemon = [
  "pikachu", "bulbasaur", "ivysaur", "venusaur", "squirtle", "wartortle", "blastoise",
  "charmander", "charmeleon", "charizard", "caterpie", "metapod", "butterfree", "weedle",
  "kakuna", "beedrill", "raticate", "spearow", "fearow", "ekans", "arbok", "raichu",
  "sandshrew", "sandslash", "nidoran♀", "nidorina", "nidoqueen", "nidoran♂", "nidorino",
  "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff",
  "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat",
  "venomoth", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel",
  "geodude", "graveler", "golem", "cubone", "marowak", "ponyta", "rapidash", "magnemite",
  "magneton", "farfetch'd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk",
  "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno",
  "krabby", "kingler", "exeggcute", "exeggutor", "kabuto", "kabutops", "aerodactyl",
  "articuno", "zapdos", "moltres", "mewtwo", "mew", "rattata", "pidgeotto", "pidgeot",
  "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape",
  "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "tentacool", "tentacruel",
  "slowpoke", "slowbro", "electrode", "voltorb", "hitmonchan", "hitmonlee", "chansey",
  "kangaskhan", "tangela", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie",
  "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "ditto", "omanyte", "omastar",
  "snorlax", "dragonite", "dragonair", "dratini", "✨Pikachu✨", "✨Bulbasaur✨", "✨Ivysaur✨", "✨Venusaur✨", "✨Squirtle✨", "✨Wartortle✨", "✨Blastoise✨",
  "✨Charmander✨", "✨Charmeleon✨", "✨Charizard✨", "✨Caterpie✨", "✨Metapod✨", "✨Butterfree✨", "✨Weedle✨",
  "✨Kakuna✨", "✨Beedrill✨", "✨Raticate✨", "✨Spearow✨", "✨Fearow✨", "✨Ekans✨", "✨Arbok✨", "✨Raichu✨",
  "✨Sandshrew✨", "✨Sandslash✨", "✨Nidoran♀✨", "✨Nidorina✨", "✨Nidoqueen✨", "✨Nidoran♂✨", "✨Nidorino✨",
  "✨Nidoking✨", "✨Clefairy✨", "✨Clefable✨", "✨Vulpix✨", "✨Ninetales✨", "✨Jigglypuff✨", "✨Wigglytuff✨",
  "✨Zubat✨", "✨Golbat✨", "✨Oddish✨", "✨Gloom✨", "✨Vileplume✨", "✨Paras✨", "✨Parasect✨", "✨Venonat✨",
  "✨Venomoth✨", "✨Machop✨", "✨Machoke✨", "✨Machamp✨", "✨Bellsprout✨", "✨Weepinbell✨", "✨Victreebel✨",
  "✨Geodude✨", "✨Graveler✨", "✨Golem✨", "✨Cubone✨", "✨Marowak✨", "✨Ponyta✨", "✨Rapidash✨", "✨Magnemite✨",
  "✨Magneton✨", "✨Farfetch'd✨", "✨Doduo✨", "✨Dodrio✨", "✨Seel✨", "✨Dewgong✨", "✨Grimer✨", "✨Muk✨",
  "✨Shellder✨", "✨Cloyster✨", "✨Gastly✨", "✨Haunter✨", "✨Gengar✨", "✨Onix✨", "✨Drowzee✨", "✨Hypno✨",
  "✨Krabby✨", "✨Kingler✨", "✨Exeggcute✨", "✨Exeggutor✨", "✨Kabuto✨", "✨Kabutops✨", "✨Aerodactyl✨",
  "✨Articuno✨", "✨Zapdos✨", "✨Moltres✨", "✨Mewtwo✨", "✨Mew✨", "✨Rattata✨", "✨Pidgeotto✨", "✨Pidgeot✨",
  "✨Diglett✨", "✨Dugtrio✨", "✨Meowth✨", "✨Persian✨", "✨Psyduck✨", "✨Golduck✨", "✨Mankey✨", "✨Primeape✨",
  "✨Poliwag✨", "✨Poliwhirl✨", "✨Poliwrath✨", "✨Abra✨", "✨Kadabra✨", "✨Alakazam✨", "✨Tentacool✨", "✨Tentacruel✨",
  "✨Slowpoke✨", "✨Slowbro✨", "✨Electrode✨", "✨Voltorb✨", "✨Hitmonchan✨", "✨Hitmonlee✨", "✨Chansey✨",
  "✨Kangaskhan✨", "✨Tangela✨", "✨Horsea✨", "✨Seadra✨", "✨Goldeen✨", "✨Seaking✨", "✨Staryu✨", "✨Starmie✨",
  "✨Mr. Mime✨", "✨Scyther✨", "✨Jynx✨", "✨Electabuzz✨", "✨Magmar✨", "✨Pinsir✨", "✨Ditto✨", "✨Omanyte✨", "✨Omastar✨",
  "✨Snorlax✨", "✨Dragonite✨", "✨Dragonair✨", "✨Dratini✨"
];
let randomPokemon = null; // The current Pokémon to be displayed
let playerName = "Peter";
let playerImage = "png/Red.png";
let playerPokemon = []; // The list of caught Pokémon
let playerItems = {
  pokeballs: 10,
  greatballs: 5,
  ultraballs: 2
};// The player's item inventory
let playerCurrency = 500; // Player's currency

let app = document.getElementById("app");

updateView(); // Initial view update

function updateView() {
  getRandomPokemon(); // Get a new random Pokémon

  // Simulated HP for the Pokémon
  randomPokemon.currentHP = Math.floor(Math.random() * randomPokemon.maxHP); // Randomize HP
  app.innerHTML = /*HTML*/ `
  <div class="container">
    <div class="opposingPokemon">
      <div><strong>${randomPokemon.name}</strong></div> 
      <div>Level: ${randomPokemon.level}</div>
      <img src="${randomPokemon.image}" alt="${randomPokemon.name}">
   </div>
    </div>
    
    <div class="bottomScreen">
      <div class="player">
        <img src="${playerImage}" alt="Player">
        <div>${playerName}</div>
        <div>Currency: $${playerCurrency}</div>
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
  `;
  setupButtonListeners();

  function setupButtonListeners() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
      const action = button.getAttribute('data-action');
      if (action === 'catch') {
        button.addEventListener('click', attemptCatchPokemon);
      } else if (action === 'find-another') {
        button.addEventListener('click', updateView);
      } else if (action === 'show-pokemon') {
        button.addEventListener('click', showPokemon);
      } else if (action === 'show-bag') {
        button.addEventListener('click', showBag);
      } else if (action === 'shop') {
        button.addEventListener('click', openShop);
      }
    });
  }


  function caughtPokemonView() {
    const lastCaughtPokemon = playerPokemon[playerPokemon.length - 1];
    const reward = lastCaughtPokemon.level * 10; // Reward currency based on Pokémon level
    playerCurrency += reward;

    app.innerHTML = /*HTML*/`
  <div class="caughtContainer">
    <h1>You caught ${lastCaughtPokemon.name}!</h1>
    <img src="${lastCaughtPokemon.image}" alt="${lastCaughtPokemon.name}">
    <div>You earned $${reward}!</div>
    <div class="buttonContainer outlinedBox">
      <div class="button" data-action="find-another">Find Another</div>
      <div class="button" data-action="show-pokemon">Show Your Pokémon</div>
    </div>
  </div>
  `;
    setupButtonListeners();
  }

  function failedCatchView() {
    app.innerHTML = /*HTML*/`
  <div class="failedContainer">
    <h1>${randomPokemon.name} escaped!</h1>
    <img src="${randomPokemon.image}" alt="${randomPokemon.name}">
    <div class="buttonContainer outlinedBox">
      <div class="button" data-action="find-another">Find Another</div>
      <div class="button" data-action="try-again">Try Again</div>
      <div class="button" data-action="show-pokemon">Show Your Pokémon</div>
    </div>
  </div>
  `;
    setupButtonListeners();
  }

  function attemptCatchPokemon() {
    const level = randomPokemon.level;
    const baseCatchRate = 255; // Similar to the base catch rate in Pokémon games
    const maxLevel = 100; // Maximum level

    // Determine which ball is used
    let catchModifier = 1;
    if (playerItems.ultraballs > 0) {
      playerItems.ultraballs--;
      catchModifier = 2.5;
    } else if (playerItems.greatballs > 0) {
      playerItems.greatballs--;
      catchModifier = 1.5;
    } else if (playerItems.pokeballs > 0) {
      playerItems.pokeballs--;
      catchModifier = 1;
    } else {
      showWarningMessage("You have no Pokéballs left!");
      return;
    }

    const catchChance = Math.min(1, (baseCatchRate * catchModifier) / (3 * level + 1)); // Formula to reduce catch chance based on level
    const randomNumber = Math.random();

    if (randomNumber < catchChance) {
      catchPokemon(); // Player successfully catches the Pokémon
    } else {
      failedCatchView(); // Pokémon escapes
    }
  }
  function catchPokemon() {
    playerPokemon.push(randomPokemon); // Add the current Pokémon to the player's collection
    caughtPokemonView(); // Show the caught Pokémon screen
  }

  function showPokemon() {
    let playerPokemonHtml = playerPokemon.map(pokemon => `
    <div class="pokemon">
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <div><strong>${pokemon.name}</strong> (Level: ${pokemon.level})</div>
    </div>
  `).join('');

    app.innerHTML = /*HTML*/`
  <div class="playerPokemonContainer">
    <h1>Your Pokémon</h1>
    <div class="playerPokemonList">
      ${playerPokemonHtml || '<p>You have not caught any Pokémon yet.</p>'}
    </div>
    <div class="buttonContainer outlinedBox">
      <div class="button" data-action="find-another">Find Another</div>
    </div>
  </div>
  `;
    setupButtonListeners();
  }

  function showBag() {
    app.innerHTML = /*HTML*/`
  <div class="bagContainer">
    <h1>Your Bag</h1>
    <div class="bagItem">
      <div>Pokéballs: ${playerItems.pokeballs}</div>
    </div>
    <div class="bagItem">
    <div>Greatballs: ${playerItems.greatballs}</div>
    </div>
    <div class="bagItem">
      <div>Ultraballs: ${playerItems.ultraballs}</div>
    </div>
    <div class="buttonContainer outlinedBox">
      <div class="button" data-action="find-another">Find Another</div>
    </div>
  </div>
  `;
    setupButtonListeners();
  }

  function openShop() {
    app.innerHTML = /*HTML*/`
  <div class="shopContainer">
    <h1>Shop</h1>

    <!-- Currency Display Box -->
    <div class="currencyBox">
      <span>Currency: $${playerCurrency}</span>
    </div>

    <!-- Shop items -->
    <div class="shopItem">
      <div>Pokéball - $20</div>
      <button onclick="buyItem('pokeballs', 20, 5)">Buy</button>
    </div>
    <div class="shopItem">
      <div>Greatball - $50</div>
      <button onclick="buyItem('greatballs', 50, 2)">Buy</button>
    </div>
    <div class="shopItem">
      <div>Ultraball - $100</div>
      <button onclick="buyItem('ultraballs', 100, 1)">Buy</button>
    </div>

    <!-- Back button -->
    <div class="buttonContainer outlinedBox">
      <div class="button" data-action="find-another">Back</div>
    </div>
  </div>
  `;
    setupButtonListeners();
  }

  function buyItem(item, cost, quantity) {
    if (playerCurrency >= cost) {
      playerCurrency -= cost;
      playerItems[item] += quantity;
      showWarningMessage(`You bought ${quantity} ${item} for $${cost}!`);
      openShop(); // Re-open shop to update currency display
    } else {
      showWarningMessage("You don't have enough money!");
    }
  }

  function getRandomPokemon() {
    const shinyChance = 0.000122; // 0.0001% chance to encounter a shiny Pokémon
    const legendaryChance = 0.02; // 2% chance to encounter a legendary Pokémon
    const isShiny = Math.random() < shinyChance;
    const isLegendary = Math.random() < legendaryChance;

    if (isShiny && shinyList.length > 0) {
      const randomNum = Math.floor(Math.random() * shinyList.length);
      randomPokemon = shinyList[randomNum];
    } else if (isLegendary && legendaryList.length > 0) {
      const randomNum = Math.floor(Math.random() * legendaryList.length);
      randomPokemon = legendaryList[randomNum];
    } else if (pokemonList.length > 0) {
      const randomNum = Math.floor(Math.random() * pokemonList.length);
      randomPokemon = pokemonList[randomNum];
    } else {
      randomPokemon = null;
    }
  }

  function showWarningMessage(message) {
    const warningBox = document.createElement('div');
    warningBox.className = 'warningBox';
    warningBox.textContent = message;
    app.appendChild(warningBox);

    setTimeout(() => {
      warningBox.remove();
    }, 5000); // Warning lasts for 5 seconds
  }
}
