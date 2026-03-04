import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { openPack } from "../../services/packService";
import PokemonCard from "../../components/PokemonCard";

export default function OpenPack() {
  const [cards, setCards] = useState<any[]>([]);

  const abrir = async () => {
    const nuevas = await openPack();
    setCards(nuevas);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={abrir}>
        <Text style={styles.text}>ABRIR SOBRE</Text>
      </TouchableOpacity>

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
  button: { backgroundColor: "#dc2626", padding: 15, borderRadius: 12, marginBottom: 20 },
  text: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});