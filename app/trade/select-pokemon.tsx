import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useUser } from "../../contexts/UserContext";
import PokemonCard from "../../components/PokemonCard";

export default function SelectPokemon() {

const { cards } = useUser();
const router = useRouter();

return (
<View style={styles.container}>

<FlatList
data={cards}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>(
<TouchableOpacity
onPress={() =>
router.push({
pathname: "/trade/show-qr",
params:{ pokemonId:item.id }
})
}
>
<PokemonCard pokemon={item}/>
</TouchableOpacity>
)}
/>

</View>
);
}

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:"#1F1F1B",
padding:20
}
});