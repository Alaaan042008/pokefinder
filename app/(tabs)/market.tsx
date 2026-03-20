import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import { getMarket, buyCard } from "../../services/marketService";
import { useUser } from "../../contexts/UserContext";
import ScreenBackground from "@/components/ScreenBackground";
import { colors } from "@/utils/theme";

export default function Market() {
  const [items, setItems] = useState<any[]>([]);
  const { addCard, coins, spendCoins } = useUser();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getMarket();
    setItems(data);
  };

  const comprar = async (item: any) => {
    if (coins < item.price) {
      alert("No tienes suficientes monedas");
      return;
    }
  
    spendCoins(item.price);
    await buyCard(item);
    addCard({ ...item, type: "pokemon", image: item.sprites?.front_default ?? item.image });
    load();
  };

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <Image source={require("@/assets/images/pokelogo.png")} style={styles.logo} />
        <Text style={styles.coins}>💰 {coins} monedas</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          ListEmptyComponent={<Text style={styles.empty}>No hay ofertas disponibles por ahora.</Text>}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => comprar(item)} activeOpacity={0.92}>
              <View style={styles.marketItem}>
                <Image source={{ uri: item.sprites?.front_default ?? item.image }} style={styles.image} />
                <View style={styles.meta}>
                  <Text style={styles.text}>{item.name.toUpperCase()}</Text>
                  <Text style={styles.price}>💰 {item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  list: { paddingBottom: 30 },
  card: {
    backgroundColor: colors.whiteButton,
    padding: 15,
    borderRadius: 20,
    marginBottom: 12,
  },
  text: { color: colors.whiteButtonText, fontWeight: "800", fontSize: 16 },
  logo: {
    width: 180,
    height: 160,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  coins: {
    color: colors.text,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 18,
    fontWeight: "700",
  },
  empty: { color: colors.mutedText, textAlign: "center", marginTop: 30 },
  marketItem: {
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: 92,
    height: 92,
    resizeMode: "contain",
    marginRight: 14,
  },
  meta: { flex: 1 },
  price: {
    color: "#0369A1",
    fontWeight: "800",
    marginTop: 8,
  },
});