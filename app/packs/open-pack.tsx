import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useCallback, useState } from "react";
import { openPack } from "../../services/packService";
import PokemonCard from "../../components/PokemonCard";
import { useUser } from "../../contexts/UserContext";
import PackCard from "../../components/PackCard";
import PackOpeningAnimation from "../../components/PackOpeningAnimation";
import ScreenBackground from "@/components/ScreenBackground";
import { colors } from "@/utils/theme";

export default function OpenPack() {
  const { addCards, cards } = useUser();
  const [openedCards, setOpenedCards] = useState<any[]>([]);
  const [opening, setOpening] = useState(false);

  const abrir = () => {
    setOpenedCards([]);
    setOpening(true);
  };

  const finishOpening = useCallback(async () => {
      const nuevas = await openPack(cards);
    setOpenedCards(nuevas);
    addCards(nuevas);
    setOpening(false);
  }, [addCards, cards]);

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <Image source={require("@/assets/images/pokelogo.png")} style={styles.logo} />

        {!opening && openedCards.length === 0 && <PackCard onOpen={abrir} />}
        {opening && <PackOpeningAnimation onFinish={finishOpening} />}

        {openedCards.length > 0 && (
          <>
            <Text style={styles.title}>Cartas obtenidas</Text>
            <FlatList
              data={openedCards}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              numColumns={2}
              columnWrapperStyle={styles.row}
              contentContainerStyle={styles.listContent}
              renderItem={({ item }) => (
                <View style={styles.cardWrap}>
                  <PokemonCard pokemon={item} compact />
                </View>
              )}
            />
          </>
        )}
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    justifyContent: "space-between",
  },
  listContent: {
    paddingBottom: 30,
  },
  cardWrap: {
    width: "48%",
  },
  logo: {
    width: 180,
    height: 160,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 14,
    textAlign: "center",
  },
});