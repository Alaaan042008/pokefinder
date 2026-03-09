import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import QRCode from "react-native-qrcode-svg";
import { useUser } from "../../contexts/UserContext";
import { useEffect } from "react";

export default function ShowQR() {

  const params = useLocalSearchParams();
  const { removeCard } = useUser();

  const pokemonId =
    typeof params.pokemonId === "string" ? params.pokemonId : undefined;

  useEffect(() => {
    if (pokemonId) {
      removeCard(pokemonId);
    }
  }, [pokemonId]);

  if (!pokemonId) {
    return (
      <View style={styles.container}>
        <Text>No se encontró el Pokémon</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        Escanea este QR para recibir el Pokémon
      </Text>

      <QRCode
        value={`pokemon:${pokemonId}`}
        size={250}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFFFFF",
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    color:"#000",
    marginBottom:20
  }
});