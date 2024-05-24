import { styles } from "../styles/StyleSheet";
import { Text, View, Image, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Botao from "../components/ButtonComponents";
import Textos from "../components/TextComponents";

import { useFonts } from "expo-font";

export default function Sobre() {
  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontFamily: "TitanOne",
          fontSize: 22,
          color: "#17395C",
          textAlign: "center",
        }}
      >
        O que fazemos? Qual o nosso objetivo?
      </Text>
      <Text
        style={{
          fontSize: 19,
          textAlign: "center",
          marginTop: 20,
          textAlign: "justify",
          marginBottom: 10,
        }}
      >
        "Somos uma empresa dedicada à adoção de cães, comprometida em encontrar
        lares amorosos para esses animais. .
      </Text>
      <Text
        style={{
          fontSize: 19,
          textAlign: "center",
          textAlign: "justify",
          marginBottom: 10,
        }}
      >
        Nosso objetivo é criar conexões duradouras entre famílias e seus novos
        membros de quatro patas, priorizando o bem-estar dos animais em cada
        passo do processo de adoção.
      </Text>
      <Text
        style={{
          fontSize: 19,
          textAlign: "center",
          textAlign: "justify",
          marginBottom: 18,
        }}
      >
        Com uma equipe dedicada e apaixonada por animais, estamos aqui para
        ajudá-lo a encontrar o companheiro perfeito para você e sua família,
        enquanto transformamos vidas e espalhamos alegria através da adoção de
        animais fofos e amorosos."
      </Text>

      <Text>
        Somos uma instutuição focada e dedicada no cuidado de nossos pequenos
        amiguinhos.
      </Text>
      <Text
        style={{ fontSize: 25, fontFamily: "TitanOne", textAlign: "center" }}
      >
        Conheça um pouco mais sobre a gente!
      </Text>
    </SafeAreaView>
  );
}
