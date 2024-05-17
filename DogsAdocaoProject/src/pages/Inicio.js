import { styles } from "../styles/StyleSheet";
import { Text, SafeAreaView, View, Image } from "react-native";
import Botao from "../components/ButtonComponents";
import Textos from "../components/TextComponents";

import { useFonts } from "expo-font";

export default function PageInicial() {

    const [fontsLoaded] = useFonts({
        "TitanOne": require("../assets/fonts/TitanOne-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boasVindas}>
                <Textos title={"Welcome"} estilotexto={{ fontFamily: "TitanOne", fontSize: 20 }} />
                <Textos title={"Amicão"} estilotexto={{ fontFamily: "TitanOne", fontSize: 37 }} />
                <Textos title={"Venha conheçer seu novo amigo cão..."} estilotexto={styles.subtitulo} />
            </View>

            <View style={styles.ViewImage}>
                <Image source={require('../assets/images/cachorrinsorri.png')} style={styles.imagemInicial} />
            </View>

            <View style={styles.ButtonsInicial}>
                <Botao TxtBtn={"Entrar"} estilos={styles.buttonInicial} txtestilos={styles.conteudobotao} />
                <Botao TxtBtn={"Cadastro"} estilos={[styles.buttonInicial, {
                    backgroundColor: '#EFB758', shadowOffset: { width: 0, height: 5 },
                    shadowColor: 'gold',
                    shadowRadius: 10,
                    shadowOpacity: 0.5,
                    elevation: 5
                }]} txtestilos={[styles.conteudobotao, { color: 'black' }]} />
            </View>

        </SafeAreaView>
    )
}