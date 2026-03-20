import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";
import ScreenBackground from "@/components/ScreenBackground";
import { colors, popularOptionSprites } from "@/utils/theme";

const options = [
  {
    key: "nearby",
    texto: "Buscar Pokémon en el mapa",
    route: "/nearby/nearby-cards",
    sprite: popularOptionSprites.nearby,
  },
  {
    key: "collection",
    texto: "Ver mi colección",
    route: "/(tabs)/collection",
    sprite: popularOptionSprites.collection,
  },
  {
    key: "packs",
    texto: "Obtener cartas (sobres y mercado)",
    route: "/cards/get-cards",
    sprite: popularOptionSprites.packs,
  },
  {
    key: "send",
    texto: "Enviar Pokémon (generar QR)",
    route: "/trade/select-pokemon",
    sprite: popularOptionSprites.send,
  },
  {
    key: "receive",
    texto: "Recibir Pokémon (escanear QR)",
    route: "/trade/scan-pokemon",
    sprite: popularOptionSprites.receive,
  },
];

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <ScreenBackground>
      <ScrollView contentContainerStyle={styles.content}>
      <Image source={require("@/assets/images/pokelogo.png")} style={styles.logo} />
        <View style={styles.headerCard}>
          <Text style={styles.title}>Hola {user?.name}</Text>
          <Text style={styles.subtitle}>Explora PokeFinder con una interfaz más fría y elegante.</Text>
        </View>

        {options.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={styles.optionButton}
            onPress={() => router.push(option.route as any)}
            activeOpacity={0.9}
          >
            <Image source={{ uri: option.sprite }} style={styles.optionSprite} />
            <Text style={styles.optionText}>{option.texto}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
    paddingBottom: 36,
    alignItems: "center",
  },
  headerCard: {
    width: "100%",
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.text,
    marginTop: 8,
  },
  subtitle: {
    color: colors.mutedText,
    marginTop: 8,
    lineHeight: 22,
  },
  optionButton: {
    backgroundColor: colors.whiteButton,
    borderRadius: 20,
    width: "100%",
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
  },
  optionSprite: {
    width: 54,
    height: 54,
    marginRight: 14,
  },
  optionText: {
    color: colors.whiteButtonText,
    textAlign: "left",
    fontWeight: "800",
    flex: 1,
    fontSize: 15,
  },
  logo: {
    width: 200,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
});