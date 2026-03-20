import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import ScreenBackground from "@/components/ScreenBackground";
import { colors, startBackground } from "@/utils/theme";

export default function StartScreen() {
  const router = useRouter();

  return (
    <ScreenBackground backgroundSource={startBackground} overlayOpacity={0.12}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Image source={require("../assets/images/pokelogo.png")} style={styles.logo} />
          <Text style={styles.tagline}>Tu aventura Pokémon comienza aquí.</Text>
        </View>

        <TouchableOpacity style={styles.startButton} onPress={() => router.push("/login")} activeOpacity={0.9}>
          <Text style={styles.startText}>Presiona para Iniciar</Text>
        </TouchableOpacity>
      </View>
      </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 72,
    paddingBottom: 56,
  },
  hero: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 280,
    height: 220,
    resizeMode: "contain",
    marginBottom: 18,
  },
  tagline: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    textShadowColor: "rgba(15,23,42,0.75)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  startButton: {
    width: "100%",
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  startText: {
    color: colors.text,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 0.4,
  },
});