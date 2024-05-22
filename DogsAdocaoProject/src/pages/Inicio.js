import { styles } from "../styles/StyleSheet";
import { Text, SafeAreaView, View, Image } from "react-native";
import Botao from "../components/ButtonComponents";
import Textos from "../components/TextComponents";

import { useNavigation } from "@react-navigation/native";

import { useFonts } from "expo-font";



export default function PageInicial() {

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boasVindas}>
        <Textos
          title={"Welcome"}
          estilotexto={{ fontFamily: "TitanOne", fontSize: 26 }}
        />
        <Textos
          title={"PETlove"}
          estilotexto={{ fontFamily: "TitanOne", fontSize: 41 }}
        />
        <Textos
          title={"Venha conheçer seu novo amigo cão..."}
          estilotexto={styles.subtitulo}
        />
      </View>

      <View style={styles.ViewImage}>
        <Image
          source={require("../assets/images/jake.png")}
          style={styles.imagemInicial}
        />
      </View>

      <View style={styles.ButtonsInicial}>
        <Botao
          TxtBtn={"Entrar"}
          estilos={styles.buttonInicial}
          txtestilos={styles.conteudobotao}
          onpresstxt={() => navigation.navigate("Login")}
        />
        <Botao
          TxtBtn={"Cadastro"}
          estilos={[
            styles.buttonInicial,
            {
              backgroundColor: "#EFB758",
              shadowOffset: { width: 0, height: 5 },
              shadowColor: "gold",
              shadowRadius: 10,
              shadowOpacity: 0.5,
              elevation: 5,
            },
          ]}
          txtestilos={[styles.conteudobotao, { color: "black" }]}
          onpresstxt={() => navigation.navigate("Cadastro")}
        />
      </View>
    </SafeAreaView>
  );
}
