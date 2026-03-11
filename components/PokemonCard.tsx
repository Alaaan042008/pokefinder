import { View, Text, Image, StyleSheet } from "react-native";

const cardImages: any = {
  MEGALucarioEX: require("../assets/cards/MEGALucarioEX.png"),
  Charizard: require("../assets/cards/Charizard.png"),
  UmbreonVMAX: require("../assets/cards/UmbreonVMAX.png"),
  ShadowLugiaEX: require("../assets/cards/ShadowLugiaEX.png"),
  MEGAGengarEX: require("../assets/cards/MEGAGengarEX.png"),
  PikachuEX: require("../assets/cards/PikachuEX.png"),
  GreninjaEX: require("../assets/cards/GreninjaEX.png"),
  RayquazaVMAX: require("../assets/cards/RayquazaVMAX.png"),
  MewEX: require("../assets/cards/MewEX.png"),
  Squirtle: require("../assets/cards/Squirtle.png"),
};

export default function PokemonCard({ pokemon }: any) {

  const isCard = pokemon?.type === "card";

  const image = isCard
    ? cardImages[pokemon.id]
    : pokemon?.sprites?.front_default ?? pokemon?.image;

  return (
    <View style={styles.card}>
      {image ? (
        <Image
          source={isCard ? image : { uri: image }}
          style={styles.image}
        />
      ) : null}

      <Text style={styles.name}>
        {pokemon.name?.toUpperCase()}
      </Text>

      {pokemon.rarity && (
        <Text style={styles.rarity}>{pokemon.rarity}</Text>
      )}

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
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 5
  },
  rarity:{
    color:"#facc15",
    fontSize:12
  }
});