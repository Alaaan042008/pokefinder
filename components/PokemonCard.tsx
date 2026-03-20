import { View, Text, Image, StyleSheet } from "react-native";
import { colors, getPokemonTypes, getTypePalette } from "@/utils/theme";

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

export default function PokemonCard({ pokemon, compact = false }: any) {
  const isCard = pokemon?.type === "card";
  const image = isCard ? cardImages[pokemon.id] : pokemon?.sprites?.front_default ?? pokemon?.image;
  const types = getPokemonTypes(pokemon);
  const palette = getTypePalette(pokemon);

  return (
    <View style={[styles.card, compact && styles.cardCompact]}>
      <View style={styles.typeLayerContainer}>
        <View style={[styles.typeLayer, { backgroundColor: palette[0] }]} />
        <View style={[styles.typeLayer, styles.rightLayer, { backgroundColor: palette[1] }]} />
        <View style={styles.typeOverlay} />
      </View>

      {image ? <Image source={isCard ? image : { uri: image }} style={[styles.image, compact && styles.imageCompact]} /> : null}

      <Text style={styles.name}>{pokemon.name?.toUpperCase()}</Text>

      {!!types.length && <Text style={styles.types}>{types.join(" / ").toUpperCase()}</Text>}
      {pokemon.rarity && <Text style={styles.rarity}>{pokemon.rarity}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    padding: 12,
    marginBottom: 15,
    minHeight: 200,
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  cardCompact: {
    minHeight: 180,
  },
  typeLayerContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
  },
  typeLayer: {
    flex: 1,
  },
  rightLayer: {
    opacity: 0.95,
  },
  typeOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(15,23,42,0.28)",
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginTop: 8,
  },
  imageCompact: {
    width: 92,
    height: 92,
  },
  name: {
    color: colors.text,
    fontWeight: "800",
    marginTop: 8,
    textAlign: "center",
  },
  types: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 11,
    marginTop: 4,
    textAlign: "center",
  },
  rarity: {
    color: colors.success,
    fontSize: 12,
    fontWeight: "800",
    marginTop: 6,
  },
});