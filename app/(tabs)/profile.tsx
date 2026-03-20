import { View, Text, StyleSheet, Image } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import ScreenBackground from "@/components/ScreenBackground";
import { colors } from "@/utils/theme";

export default function Profile() {
  const { user } = useAuth();

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <Image source={require("@/assets/images/pokelogo.png")} style={styles.logo} />
        <View style={styles.card}>
          <Text style={styles.title}>Perfil del entrenador</Text>
          <Text style={styles.text}>Usuario: {user?.name}</Text>
          <Text style={styles.text}>ID: {user?.id}</Text>
        </View>
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  card: {
    backgroundColor: colors.cardStrong,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 16,
  },
  text: { color: colors.mutedText, marginBottom: 10, fontSize: 16 },
  logo: {
    width: 180,
    height: 160,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 14,
  },
});