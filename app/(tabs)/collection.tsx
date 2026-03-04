import { View, FlatList, StyleSheet } from "react-native";
import { useUser } from "../../contexts/UserContext";
import PokemonCard from "../../components/PokemonCard";

export default function Collection() {
  const { cards } = useUser();

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
});