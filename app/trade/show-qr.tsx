import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import QRCode from "react-native-qrcode-svg";

export default function ShowQR(){

const { pokemonId } = useLocalSearchParams();

return(

<View style={styles.container}>

<Text style={styles.text}>
Escanea este QR para recibir el Pokémon
</Text>

<QRCode
value={`pokemon:${pokemonId}`}
size={250}
/>

</View>

)
}

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:"#000",
justifyContent:"center",
alignItems:"center"
},
text:{
color:"#fff",
marginBottom:20
}
});