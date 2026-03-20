import { View, Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import { useRouter } from "expo-router";
import ScreenBackground from "@/components/ScreenBackground";
import { colors } from "@/utils/theme";

export default function GetCards() {
  const router = useRouter();

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <Image source={require("@/assets/images/pokelogo.png")} style={styles.logo} />
        <View style={styles.heroCard}>
          <Text style={styles.title}>Obtener Cartas</Text>
          <Text style={styles.subtitle}>Elige cómo quieres conseguir nuevos Pokémon.</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/packs/open-pack")} activeOpacity={0.9}>
          <Text style={styles.buttonText}>Abrir sobres</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/market")} activeOpacity={0.9}>
          <Text style={styles.buttonText}>Comprar en mercado</Text>
        </TouchableOpacity>
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  heroCard: {
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: 22,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: colors.mutedText,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.whiteButton,
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
  },
  buttonText: {
    color: colors.whiteButtonText,
    textAlign: "center",
    fontWeight: "800",
  },
  logo: {
    width: 180,
    height: 160,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
});