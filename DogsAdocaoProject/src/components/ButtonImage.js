import { TouchableOpacity, Image } from "react-native";

export default function BotaoImage({ estilos, onpresstxt, fundoBotao }) {
  return (
    <TouchableOpacity style={estilos} onPress={onpresstxt}>
      <Image source={fundoBotao} style={estilos} />
    </TouchableOpacity>
  );
}
