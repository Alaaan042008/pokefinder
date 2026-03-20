import { View, Animated, StyleSheet } from "react-native";
import { useEffect, useRef } from "react";

export default function PackOpeningAnimation({ onFinish }: any) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onFinish();
    });
  }, [onFinish, scale]);

  return (
    <View style={styles.container}>
 <Animated.Image source={require("../assets/packs/base-pack.png")} style={[styles.image, { transform: [{ scale }] }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: "contain",
  },
});