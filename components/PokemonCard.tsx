import { View, Text, Image, StyleSheet } from "react-native";

export default function PokemonCard({ pokemon }: any) {
    const image = pokemon?.sprites?.front_default ?? pokemon?.image;

  return (
    <View style={styles.card}>
      {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
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