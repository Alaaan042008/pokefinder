import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext";

export default function PokemonReceived() {
  const { id } = useLocalSearchParams();
  const { addCard } = useUser();

  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {

    const getPokemon = async () => {
  
      try {
  
        console.log("Pokemon ID recibido:", id);
  
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  
        if (!res.ok) {
          throw new Error("No se pudo obtener el Pokémon");
        }
  
        const data = await res.json();
  
        setPokemon(data);
  
        addCard({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default
        });
  
      } catch (error) {
        console.log("Error obteniendo Pokémon:", error);
      }
  
    };
  
    getPokemon();
  
  }, []);

  if (!pokemon) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      ¡Felicidades! 
      Has conseguido a {pokemon.name}
      </Text>

      <Image
        source={{ uri: pokemon.sprites.front_default }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1B",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "yellow",
    fontSize: 24,
    marginBottom: 20,
  },

  image: {
    width: 200,
    height: 200,
  },
});