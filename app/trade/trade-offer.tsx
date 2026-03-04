import { View, Text, Button, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { createTrade } from "../../services/tradeService";

export default function TradeOffer() {
  const { toUser } = useLocalSearchParams();

  const enviar = async () => {
    await createTrade(toUser as string);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Intercambio con: {toUser}</Text>
      <Button title="Enviar intercambio" onPress={enviar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  text: { color: "#fff", marginBottom: 20 },
});