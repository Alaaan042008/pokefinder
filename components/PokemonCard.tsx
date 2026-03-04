import { View, Text, Image, StyleSheet } from "react-native";

export default function PokemonCard({ pokemon }: any) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111",
    borderWidth: 2,
    borderColor: "#facc15",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  image: { width: 100, height: 100 },
  name: { color: "#fff", fontWeight: "bold" },
});