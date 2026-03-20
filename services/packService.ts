import { getRandomPokemon } from "./pokeapi";
import { cardsDatabase } from "../utils/cardsDatabase";

export const openPack = async (userCards: any[] = []) => {
  const roll = Math.random();

  if (roll <= 0.9) {
    const pokemons = [];
    const ids: number[] = [];

    while (pokemons.length < 10) {
      const data = await getRandomPokemon();

  if (ids.includes(data.id)) continue;

  ids.push(data.id);
      pokemons.push({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        type: "pokemon",
        pokemonTypes: data.types?.map((entry: any) => entry.type.name) ?? [],
      });
    }

    return pokemons;
  }

  const ownedCards = userCards.filter((c) => c.type === "card").map((c) => c.id);
  const available = cardsDatabase.filter((c) => !ownedCards.includes(c.id));

  if (available.length === 0) {
    return [
      {
        id: "coins",
        name: "+100 monedas",
        image: null,
        type: "reward",
      },
    ];
  }

  const rarityRoll = Math.random();
  let rarity = "NORMAL";

  if (rarityRoll <= 0.1) rarity = "VMAX";
  else if (rarityRoll <= 0.4) rarity = "EX";

  const possible = available.filter((c) => c.rarity === rarity);
  const pool = possible.length ? possible : available;
  const randomCard = pool[Math.floor(Math.random() * pool.length)];

  return [
    {
      id: randomCard.id,
      name: randomCard.id,
      image: randomCard.image,
      type: "card",
      rarity: randomCard.rarity,
      pokemonTypes: randomCard.pokemonTypes,
    },
  ];
};