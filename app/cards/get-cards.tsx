import { View, Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import { useRouter } from "expo-router";

export default function GetCards() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/pokelogo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Obtener Cartas</Text>
      <Text style={styles.subtitle}>Elige cómo quieres conseguir nuevos Pokémon</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/packs/open-pack")}>
        <Text style={styles.buttonText}>Abrir sobres</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/market")}>
        <Text style={styles.buttonText}>Comprar en mercado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1B",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#facc15",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#111",
    borderWidth: 2,
    borderColor: "#facc15",
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  logo: {
    width: 200,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
});