import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import QRCode from "react-native-qrcode-svg";
import { useUser } from "../../contexts/UserContext";
import { useEffect } from "react";
import ScreenBackground from "@/components/ScreenBackground";
import { colors } from "@/utils/theme";

export default function ShowQR() {
  const params = useLocalSearchParams();
  const { removeCard } = useUser();

  const pokemonId = typeof params.pokemonId === "string" ? params.pokemonId : undefined;

  useEffect(() => {
    if (pokemonId) {
      removeCard(pokemonId);
    }
  }, [pokemonId, removeCard]);

  if (!pokemonId) {
    return (
      <ScreenBackground>
        <View style={styles.container}>
          <Text style={styles.text}>No se encontró el Pokémon.</Text>
        </View>
      </ScreenBackground>
    );
  }

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <View style={styles.qrCard}>
          <Text style={styles.text}>Escanea este QR para recibir el Pokémon</Text>
          <QRCode value={`pokemon:${pokemonId}`} size={250} />
        </View>
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  qrCard: {
    backgroundColor: colors.whiteButton,
    borderRadius: 28,
    padding: 24,
    alignItems: "center",
  },
  text: {
    color: colors.whiteButtonText,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "700",
  },
});