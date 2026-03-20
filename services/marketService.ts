let market: any[] = [
  {
    id: 25,
    name: "pikachu",
    price: 50,
    sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
    pokemonTypes: ["electric"],
  },
  {
    id: 6,
    name: "charizard",
    price: 200,
    sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
    pokemonTypes: ["fire", "flying"],
  },
  {
    id: 94,
    name: "gengar",
    price: 120,
    sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" },
    pokemonTypes: ["ghost", "poison"],
  },
];

export const getMarket = async () => {
  return market;
};

export const buyCard = async (item: any) => {
  market = market.filter((i) => i.id !== item.id);
};