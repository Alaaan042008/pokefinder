import { View, FlatList, StyleSheet, Image, Text } from "react-native";
import { useUser } from "../../contexts/UserContext";
import PokemonCard from "../../components/PokemonCard";
import ScreenBackground from "@/components/ScreenBackground";
import { colors } from "@/utils/theme";

export default function Collection() {
  const { cards } = useUser();

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <Image source={require("@/assets/images/pokelogo.png")} style={styles.logo} />
        <Text style={styles.title}>Mi colección</Text>
        <FlatList
          data={cards}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={<Text style={styles.empty}>Todavía no tienes cartas. ¡Ve a conseguir algunas!</Text>}
          renderItem={({ item }) => (
            <View style={styles.cardWrap}>
              <PokemonCard pokemon={item} compact />
            </View>
          )}
        />
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 10 },
  row: { justifyContent: "space-between" },
  listContent: { paddingBottom: 32 },
  cardWrap: { width: "48%" },
  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 16,
    textAlign: "center",
  },
  empty: {
    color: colors.mutedText,
    textAlign: "center",
    marginTop: 28,
  },
  logo: {
    width: 180,
    height: 160,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 6,
  },
});