import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { useRouter } from "expo-router";
import ScreenBackground from "@/components/ScreenBackground";
import { colors } from "@/utils/theme";

export default function ScanPokemon() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const router = useRouter();

  if (!permission) {
    return (
      <ScreenBackground>
        <View style={styles.centered}>
          <Text style={styles.infoText}>Cargando cámara...</Text>
        </View>
      </ScreenBackground>
    );
  }

  if (!permission.granted) {
    return (
      <ScreenBackground>
        <View style={styles.centered}>
          <Text style={styles.infoText}>No hay permiso para usar la cámara.</Text>
          <TouchableOpacity style={styles.actionButton} onPress={requestPermission}>
            <Text style={styles.actionText}>Dar permiso</Text>
          </TouchableOpacity>
        </View>
      </ScreenBackground>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
  style={{ flex: 1 }}
  barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
  onBarcodeScanned={({ data }) => {
    if (scanned) return;
    setScanned(true);
    const pokemonId = data.split(":")[1];
    router.push({ pathname: "/trade/pokemon-received", params: { id: pokemonId } });
  }}
/>

      {scanned && (
        <TouchableOpacity style={styles.scanAgain} onPress={() => setScanned(false)}>
        <Text style={styles.scanAgainText}>Escanear otra vez</Text>
      </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  infoText: {
    color: colors.text,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "700",
  },
  actionButton: {
    backgroundColor: colors.whiteButton,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  actionText: {
    color: colors.whiteButtonText,
    fontWeight: "800",
  },
  scanAgain: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    backgroundColor: colors.whiteButton,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 16,
  },
  scanAgainText: {
    color: colors.whiteButtonText,
    fontWeight: "800",
  },
});