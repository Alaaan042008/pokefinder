import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import { getMarket, buyCard } from "../../services/marketService";
import { useUser } from "../../contexts/UserContext";

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
  
    addCard(item);
  
    load();
  
  };

  return (
    <View style={styles.container}>
      <Image
              source={require("@/assets/images/pokelogo.png")}
              style={styles.logo}
            />
      <Text style={styles.coins}>💰 {coins} monedas</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => comprar(item)}>
            <View style={styles.marketItem}>

<Image
source={
item.type === "pokemon"
? { uri: item.image }
: item.image
}
style={styles.image}
/>

<Text style={styles.text}>{item.name}</Text>

<Text style={styles.price}>💰 {item.price}</Text>

</View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1F1F1B", padding: 20 },
  card: { backgroundColor: "#111", padding: 15, borderRadius: 10, borderColor: "#facc15", borderWidth: 1, marginBottom: 10 },
  text: { color: "#fff" },
  logo: {
    width: 200,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  coins:{
    color:"#facc15",
    fontSize:18,
    textAlign:"center",
    marginBottom:20
  },
  marketItem:{
    alignItems:"center"
    },
    
    image:{
    width:100,
    height:100,
    resizeMode:"contain",
    marginBottom:5
    },
    
    price:{
    color:"#facc15"
    }
});