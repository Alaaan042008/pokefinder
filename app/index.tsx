import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const { login } = useAuth();

  const entrar = async () => {
    if (!nombre.trim()) return;
    await login(nombre);
    router.push("./(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Image
  source={require("../assets/images/pokelogo.png")}
  style={styles.logo}
/>
        
        <Text style={styles.subtitle}>Encuentra. Captura. Colecciona.</Text>

        <TextInput
          placeholder="Ingresa tu nombre"
          placeholderTextColor="#aaa"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={entrar}>
          <Text style={styles.buttonText}>INICIAR AVENTURA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0097A7", justifyContent: "center", alignItems: "center" },
  card: { backgroundColor: "#0097A7", width: "88%", padding: 30, borderRadius: 20, borderWidth: 2, borderColor: "#facc15" },
  title: { fontSize: 30, fontWeight: "bold", textAlign: "center", color: "#facc15" },
  subtitle: { textAlign: "center", color: "#fff", marginBottom: 25 },
  input: { backgroundColor: "#1f1f1f", color: "white", borderRadius: 10, padding: 12, marginBottom: 20, borderWidth: 1, borderColor: "#facc15" },
  button: { backgroundColor: "#dc2626", padding: 14, borderRadius: 12 },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
  logo: {
    width: 200,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
});