import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require("@/assets/images/pokelogo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Hola {user?.name}</Text>
        <Text style={styles.subtitle}>Bienvenido a PokeFinder</Text>

        <Boton
          texto="Buscar Pokémon en el mapa"
          onPress={() => router.push("/nearby/nearby-cards")}
        />
        <Boton
          texto="Ver mi colección"
          onPress={() => router.push("/(tabs)/collection")}
        />
        <Boton
          texto="Obtener cartas (sobres y mercado)"
          onPress={() => router.push("/cards/get-cards")}
        />
        <Boton
  texto="Enviar Pokémon (generar QR)"
  onPress={() => router.push("/trade/select-pokemon")}
/>

<Boton
  texto="Recibir Pokémon (escanear QR)"
  onPress={() => router.push("/trade/scan-pokemon")}
/>
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
  container: { flex: 1, backgroundColor: "#0097A7" },
  content: { padding: 25, alignItems: "center" },
  title: { fontSize: 26, fontWeight: "bold", color: "#facc15", marginTop: 40 },
  subtitle: { color: "#fff", marginBottom: 30 },
  optionButton: {
    backgroundColor: "#111",
    borderWidth: 2,
    borderColor: "#facc15",
    padding: 15,
    borderRadius: 15,
    width: "100%",
    marginBottom: 15,
  },
  optionText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  logo: {
    width: 200,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
});