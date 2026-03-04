import { View, Text, Modal, Button } from "react-native";

export default function TradeModal({ visible, onClose }: any) {
  return (
    <Modal visible={visible} transparent>
      <View style={{ flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"rgba(0,0,0,0.8)" }}>
        <View style={{ backgroundColor:"#111", padding:20 }}>
          <Text style={{ color:"#fff" }}>Intercambio enviado</Text>
          <Button title="Cerrar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}