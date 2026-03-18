import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function PackCard({ onOpen }: any) {

  return (
    <TouchableOpacity style={styles.pack} onPress={onOpen} activeOpacity={0.8}>
      <Image
        source={require("../assets/packs/base-pack.png")}
        style={styles.image}
      />
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({

  pack:{
    alignItems:"center",
    justifyContent:"center",
    marginVertical:30
  },

  image:{
    width:180,
    height:260,
    resizeMode:"contain"
  }

});