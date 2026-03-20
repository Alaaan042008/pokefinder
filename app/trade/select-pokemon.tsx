import { View, FlatList, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import { useUser } from "../../contexts/UserContext";
import PokemonCard from "../../components/PokemonCard";
import ScreenBackground from "@/components/ScreenBackground";
import { colors } from "@/utils/theme";

export default function SelectPokemon() {
    const { cards } = useUser();
  const router = useRouter();

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <Image source={require("@/assets/images/pokelogo.png")} style={styles.logo} />
        <Text style={styles.title}>Elige un Pokémon para enviar</Text>
        <FlatList
          data={cards}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.cardWrap}>
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/trade/show-qr",
                    params: { pokemonId: item.id },
                  })
                }
              >
                <PokemonCard pokemon={item} compact />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
      title: {
        color: colors.text,
        textAlign: "center",
        fontSize: 22,
        fontWeight: "800",
        marginBottom: 14,
      },
      row: { justifyContent: "space-between" },
      cardWrap: { width: "48%" },
      listContent: { paddingBottom: 30 },
      logo: {
        width: 180,
        height: 160,
        resizeMode: "contain",
        alignSelf: "center",
        marginBottom: 6,
      },
});