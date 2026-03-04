import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Hola {user?.name}</Text>
        <Text style={styles.subtitle}>Bienvenido a PokeFinder</Text>

        <Boton texto="Abrir Sobre" onPress={() => router.push("/packs/open-pack")} />
        <Boton texto="Cartas Obtenidas" onPress={() => router.push("./(tabs)/collection")} />
        <Boton texto="Scanner QR" onPress={() => router.push("/trade/scan")} />
        <Boton texto="Mercado" onPress={() => router.push("./(tabs)/market")} />
        <Boton texto="Cartas Cercanas" onPress={() => router.push("/nearby/nearby-cards")} />
      </ScrollView>
    </View>
  );
}

function Boton({ texto, onPress }: any) {
  return (
    <TouchableOpacity style={styles.optionButton} onPress={onPress}>
      <Text style={styles.optionText}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  content: { padding: 25, alignItems: "center" },
  title: { fontSize: 26, fontWeight: "bold", color: "#facc15", marginTop: 40 },
  subtitle: { color: "#fff", marginBottom: 30 },
  optionButton: { backgroundColor: "#111", borderWidth: 2, borderColor: "#facc15", padding: 15, borderRadius: 15, width: "100%", marginBottom: 15 },
  optionText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});