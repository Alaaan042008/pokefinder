import { View, FlatList, StyleSheet, Image } from "react-native";
import { useUser } from "../../contexts/UserContext";
import PokemonCard from "../../components/PokemonCard";

export default function Collection() {
  const { cards } = useUser();

  return (
    <View style={styles.container}>
      <Image
                source={require("@/assets/images/pokelogo.png")}
                style={styles.logo}
              />
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1F1F1B", padding: 20 },
  logo: {
    width: 200,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
});