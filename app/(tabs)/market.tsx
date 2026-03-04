import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getMarket, buyCard } from "../../services/marketService";

export default function Market() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getMarket();
    setItems(data);
  };

  const comprar = async (item: any) => {
    await buyCard(item);
    load();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => comprar(item)}>
            <Text style={styles.text}>{item.name} - 💰 {item.price}</Text>
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