import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Usuario: {user?.name}</Text>
      <Text style={styles.text}>ID: {user?.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  text: { color: "#fff", marginBottom: 10 },
});