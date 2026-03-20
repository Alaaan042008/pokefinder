import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import ScreenBackground from "@/components/ScreenBackground";
import { colors } from "@/utils/theme";

export default function Login() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const { login } = useAuth();

  const entrar = async () => {
    if (!nombre.trim()) return;
    await login(nombre.trim());
    router.push("./(tabs)/home");
  };

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={require("../assets/images/pokelogo.png")} style={styles.logo} />
          <Text style={styles.subtitle}>Encuentra. Captura. Colecciona.</Text>

          <TextInput
            placeholder="Ingresa tu nombre"
            placeholderTextColor="#94A3B8"
            value={nombre}
            onChangeText={setNombre}
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={entrar} activeOpacity={0.9}>
            <Text style={styles.buttonText}>INICIAR AVENTURA</Text>
          </TouchableOpacity>
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
    padding: 24,
  },
  card: {
    backgroundColor: colors.cardStrong,
    width: "100%",
    padding: 28,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.28,
    shadowRadius: 22,
    elevation: 12,
  },
  subtitle: {
    textAlign: "center",
    color: colors.mutedText,
    marginBottom: 25,
    fontSize: 16,
  },
  input: {
    backgroundColor: "rgba(15,23,42,0.85)",
    color: colors.text,
    borderRadius: 16,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(125,211,252,0.28)",
  },
  button: {
    backgroundColor: "#F8FAFC",
    padding: 16,
    borderRadius: 16,
  },
  buttonText: {
    color: colors.whiteButtonText,
    textAlign: "center",
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  logo: {
    width: 200,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
});