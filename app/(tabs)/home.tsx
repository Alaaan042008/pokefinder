import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Home() {
  const { usuario } = useLocalSearchParams<{ usuario: string }>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>
          Hola {usuario}
        </Text>

        <Text style={styles.subtitle}>
          Bienvenido a PokeFinder
        </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>

        <Boton texto="Captura de Pokemones (Beta)" />
        <Boton texto="Cartas Obtenidas" />
        <Boton texto="Scanner de Cartas/Pokemones" />
        <Boton texto="Pokemones Capturados" />
        <Boton texto="Objetos" />
      </ScrollView>
    </View>
  );
}

function Boton({ texto }: { texto: string }) {
  return (
    <TouchableOpacity style={styles.optionButton}>
      <Text style={styles.optionText}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  content: {
    padding: 25,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#facc15",
    marginTop: 40,
  },
  subtitle: {
    color: "#ffffff",
    marginBottom: 30,
    fontSize: 16,
  },
  optionButton: {
    backgroundColor: "#111111",
    borderWidth: 2,
    borderColor: "#facc15",
    padding: 15,
    borderRadius: 15,
    width: "100%",
    marginBottom: 15,
  },
  optionText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});