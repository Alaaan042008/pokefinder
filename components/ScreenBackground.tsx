import { ImageBackground, ImageSourcePropType, StyleSheet, View } from "react-native";
import { ReactNode } from "react";
import { appBackground } from "@/utils/theme";

type Props = {
  children: ReactNode;
  backgroundSource?: ImageSourcePropType;
  overlayOpacity?: number;
};

export default function ScreenBackground({
  children,
  backgroundSource = appBackground,
  overlayOpacity = 0.35,
}: Props) {
  return (
    <ImageBackground source={backgroundSource} style={styles.background} resizeMode="cover">
      <View style={[styles.overlay, { backgroundColor: `rgba(2, 6, 23, ${overlayOpacity})` }]}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
  },
});