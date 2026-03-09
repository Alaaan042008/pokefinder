import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";
import { useState } from "react";
import { openPack } from "../../services/packService";
import PokemonCard from "../../components/PokemonCard";
import { useUser } from "../../contexts/UserContext";

export default function OpenPack() {
  const [cards, setCards] = useState<any[]>([]);
  const { addCards } = useUser();

  const abrir = async () => {
    const nuevas = await openPack();
    setCards(nuevas);
    addCards(nuevas);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/pokelogo.png")}
        style={styles.logo}
      />
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
  container: { flex: 1, backgroundColor: "#1F1F1B", padding: 20 },
  button: { backgroundColor: "#dc2626", padding: 15, borderRadius: 12, marginBottom: 20 },
  text: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  logo: {
    width: 200,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
});