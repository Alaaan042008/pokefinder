import { BarCodeScanner } from "expo-barcode-scanner";

export default function QRScanner({ onScan }: any) {
  return (
    <BarCodeScanner
      onBarCodeScanned={({ data }) => onScan(data)}
      style={{ flex: 1 }}
    />
  );
}