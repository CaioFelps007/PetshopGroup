import { styles } from "../styles/StyleSheet";
import { Text, View, Image, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Botao from "../components/ButtonComponents";
import Textos from "../components/TextComponents";
import { Modal } from "react-native";
import { TouchableOpacity } from "react-native";

import { useFonts } from "expo-font";

export default function Sobre() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    LoraItalic: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }
  return (
    <View>
      <ImageBackground>
        <Text>Saiba mais sobre nossa empresa</Text>
      </ImageBackground>

      <View></View>
    </View>
  );
}
