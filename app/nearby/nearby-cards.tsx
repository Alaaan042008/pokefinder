import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getNearbyCards, claimCard } from "../../services/locationService";

export default function NearbyCards() {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getNearbyCards();
    setCards(data);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => claimCard(item)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  card: { backgroundColor: "#111", padding: 15, borderRadius: 10, borderColor: "#facc15", borderWidth: 1, marginBottom: 10 },
  text: { color: "#fff" },
});