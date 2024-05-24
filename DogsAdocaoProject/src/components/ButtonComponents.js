import { Text, TouchableOpacity, Image } from "react-native";

export default function Botao({
  txtestilos,
  estilos,
  onpresstxt,
  TxtBtn,
  fundoBotao,
}) {
  return (
    <TouchableOpacity style={estilos} onPress={onpresstxt}>
      <Text style={txtestilos}>{TxtBtn}</Text>
    </TouchableOpacity>
  );
}
