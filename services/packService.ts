import { getRandomPokemon } from "./pokeapi";

export const openPack = async () => {
  const cards = [];
  for (let i = 0; i < 5; i++) {
    const pokemon = await getRandomPokemon();
    cards.push(pokemon);
  }
  return cards;
};