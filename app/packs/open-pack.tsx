import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useState } from "react";
import { openPack } from "../../services/packService";
import PokemonCard from "../../components/PokemonCard";
import { useUser } from "../../contexts/UserContext";
import PackCard from "../../components/PackCard";
import PackOpeningAnimation from "../../components/PackOpeningAnimation";

export default function OpenPack() {

  const { addCards, cards } = useUser();

  const [openedCards, setOpenedCards] = useState<any[]>([]);
  const [opening, setOpening] = useState(false);

  // tocar el sobre
  const abrir = () => {
    setOpenedCards([]);
    setOpening(true);
  };

  // cuando termina la animación
  const finishOpening = async () => {

    const nuevas = await openPack(cards);

    setOpenedCards(nuevas);

    addCards(nuevas);

    setOpening(false);

  };

  return (
    <View style={styles.container}>

      <Image
        source={require("@/assets/images/pokelogo.png")}
        style={styles.logo}
      />

      {!opening && openedCards.length === 0 && (
        <PackCard onOpen={abrir} />
      )}

      {opening && (
        <PackOpeningAnimation onFinish={finishOpening} />
      )}

      {openedCards.length > 0 && (
        <>
          <Text style={styles.title}>Cartas obtenidas</Text>

          <FlatList
            data={openedCards}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
          />
        </>
      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#1F1F1B",
    padding:20
  },

  logo:{
    width:200,
    height:220,
    resizeMode:"contain",
    alignSelf:"center",
    marginBottom:10
  },

  title:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold",
    marginBottom:10
  }

});