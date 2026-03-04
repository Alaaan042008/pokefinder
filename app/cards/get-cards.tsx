import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function GetCards() {
  const router = useRouter();

  return (
    <View style={styles.container}>
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
    backgroundColor: "#000",
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
});