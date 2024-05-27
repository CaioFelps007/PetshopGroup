import { View, Modal } from "react-native";

import Textos from "./TextComponents";
import Botao from "./ButtonComponents";

export default function Modall({ transparent, visible, textoModal }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Modal visible={visible} transparent={transparent} animationType="slide">
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>{textoModal}</Text>
          <Botao TxtBtn={"Fechar Descriçao"} />
        </View>
      </Modal>
    </View>
  );
}
