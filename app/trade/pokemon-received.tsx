import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext";
import ScreenBackground from "@/components/ScreenBackground";
import { colors } from "@/utils/theme";

export default function PokemonReceived() {
  const { id } = useLocalSearchParams();
  const { addCard } = useUser();
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!res.ok) {
          throw new Error("No se pudo obtener el Pokémon");
        }

        const data = await res.json();
        setPokemon(data);
  
        addCard({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          pokemonTypes: data.types?.map((entry: any) => entry.type.name) ?? [],
          type: "pokemon",
        });
      } catch (error) {
        console.log("Error obteniendo Pokémon:", error);
      }
    };
  
    getPokemon();
  }, [addCard, id]);

  if (!pokemon) {
    return (
      <ScreenBackground>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      </ScreenBackground>
    );
  }

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>¡Felicidades! Has conseguido a {pokemon.name}</Text>
          <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
        </View>
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: colors.text,
    fontWeight: "700",
  },
  card: {
    backgroundColor: colors.cardStrong,
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});