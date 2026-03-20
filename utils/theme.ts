import { ImageSourcePropType } from "react-native";

export const appBackground = require("@/assets/images/fondo2.png") as ImageSourcePropType;
export const startBackground = require("@/assets/images/start-bg.png") as ImageSourcePropType;

export const colors = {
  text: "#F8FAFC",
  mutedText: "#D6E4F0",
  accent: "#7DD3FC",
  accentStrong: "#38BDF8",
  card: "rgba(15, 23, 42, 0.76)",
  cardStrong: "rgba(15, 23, 42, 0.92)",
  border: "rgba(148, 163, 184, 0.35)",
  whiteButton: "#FFFFFF",
  whiteButtonText: "#0F172A",
  success: "#A7F3D0",
  danger: "#FCA5A5",
  shadow: "rgba(15,23,42,0.35)",
};

export const pokemonTypeColors: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export function getPokemonTypes(pokemon: any): string[] {
  if (Array.isArray(pokemon?.pokemonTypes) && pokemon.pokemonTypes.length) {
    return pokemon.pokemonTypes;
  }

  if (Array.isArray(pokemon?.types) && pokemon.types.length) {
    return pokemon.types
      .map((entry: any) => entry?.type?.name ?? entry?.name)
      .filter(Boolean);
  }

  return [];
}

export function getTypePalette(pokemon: any): string[] {
  const types = getPokemonTypes(pokemon);

  if (!types.length) {
    return ["#1E293B", "#334155"];
  }

  const palette = types
    .slice(0, 2)
    .map((type) => pokemonTypeColors[type] ?? "#64748B");

  return palette.length === 1 ? [palette[0], palette[0]] : palette;
}

export const popularOptionSprites = {
  nearby: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  collection: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  packs: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  send: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  receive: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
};