import { View } from "react-native";
import QRScanner from "../../components/QRScanner";
import { useRouter } from "expo-router";

export default function Scan() {
  const router = useRouter();

  const onScan = (userId: string) => {
    router.push({
      pathname: "/trade/trade-offer",
      params: { toUser: userId },
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <QRScanner onScan={onScan} />
    </View>
  );
}