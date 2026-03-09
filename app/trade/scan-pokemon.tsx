import { View, Text, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function ScanPokemon() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  const router = useRouter();

  if (!permission) {
    return <Text>Cargando cámara...</Text>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>No hay permiso para usar la cámara</Text>
        <Text onPress={requestPermission}>Dar permiso</Text>
      </View>
    );
  }

  const handleScan = ({ data }: { data: string }) => {
    if (scanned) return;
  
    setScanned(true);
  
    console.log("QR detectado:", data);
  
    // data viene como "pokemon:6"
    const id = data.split(":")[1];
  
    router.push({
      pathname: "/trade/pokemon-received",
      params: { id }
    });
  };

  return (
    <View style={styles.container}>
      <CameraView
  style={{ flex: 1 }}
  barcodeScannerSettings={{
    barcodeTypes: ["qr"]
  }}
  onBarcodeScanned={({ data }) => {
    if (scanned) return;

    setScanned(true);

    console.log("QR detectado:", data);

    const pokemonId = data.split(":")[1];

router.push({
  pathname: "/trade/pokemon-received",
  params: { id: pokemonId }
});
  }}
/>

      {scanned && (
        <Text style={styles.text} onPress={() => setScanned(false)}>
          Escanear otra vez
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    backgroundColor: "yellow",
    padding: 10
  }
});