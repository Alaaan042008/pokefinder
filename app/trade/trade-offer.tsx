import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { createTrade } from "../../services/tradeService";
import ScreenBackground from "@/components/ScreenBackground";
import { colors } from "@/utils/theme";

export default function TradeOffer() {
  const { toUser } = useLocalSearchParams();

  const enviar = async () => {
    await createTrade(toUser as string);
  };

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>Intercambio con: {toUser}</Text>
          <TouchableOpacity style={styles.button} onPress={enviar}>
            <Text style={styles.buttonText}>Enviar intercambio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  card: {
    backgroundColor: colors.cardStrong,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: { color: colors.text, marginBottom: 20, fontSize: 18, fontWeight: "700" },
  button: {
    backgroundColor: colors.whiteButton,
    padding: 16,
    borderRadius: 16,
  },
  buttonText: { color: colors.whiteButtonText, textAlign: "center", fontWeight: "800" },
});