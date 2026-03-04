import { Camera, CameraView } from "expo-camera";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

interface Props {
  onScan: (data: string) => void;
}

export default function QRScanner({ onScan }: Props) {
  const [permission, setPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === "granted");
    })();
  }, []);

  if (permission === null) {
    return <View />;
  }

  if (permission === false) {
    return <Text style={{ color: "white" }}>No hay permiso para la cámara</Text>;
  }

  return (
    <CameraView
      style={{ flex: 1 }}
      barcodeScannerSettings={{
        barcodeTypes: ["qr"],
      }}
      onBarcodeScanned={(event) => {
        onScan(event.data);
      }}
    />
  );
}