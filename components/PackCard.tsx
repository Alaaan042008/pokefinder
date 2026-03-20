import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { colors } from "@/utils/theme";

export default function PackCard({ onOpen }: any) {
  return (
    <TouchableOpacity style={styles.pack} onPress={onOpen} activeOpacity={0.85}>
      <View style={styles.innerCard}>
        <Image source={require("../assets/packs/base-pack.png")} style={styles.image} />
        <Text style={styles.text}>Toca el sobre para revelar tus cartas</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pack: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
    flex: 1,
  },
  innerCard: {
    backgroundColor: colors.card,
    borderRadius: 28,
    paddingVertical: 24,
    paddingHorizontal: 22,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 260,
    resizeMode: "contain",
  },
  text: {
    color: colors.text,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 12,
  },
});