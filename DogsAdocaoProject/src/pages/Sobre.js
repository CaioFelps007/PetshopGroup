import { styles } from "../styles/StyleSheet";
import { Text, View, Image, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Botao from "../components/ButtonComponents";
import Textos from "../components/TextComponents";

import { useFonts } from "expo-font";

export default function Sobre() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    LoraItalic: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf")
  });

  if (!fontsLoaded) {
    return undefined;
  }




  return (

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
        <View style={{ width: "100%", height: 1800 }}>
          <View style={{ backgroundColor: "#17395C", width: "100%" }}>

            <View>
              <Image source={require("../assets/images/cachorrodelado.png")} style={styles.View} />

            </View>

            <View style={{ position: 'relative', bottom: 200, left: 70 }}>
              <Text style={{ fontSize: 19, fontFamily: "TitanOne", color: "#E1DCC9", textAlign: 'center' }}>O que fazemos? </Text>
              <Text style={{ fontSize: 19, fontFamily: "TitanOne", color: "#E1DCC9", textAlign: 'center' }}>Qual o nosso objetivo?</Text>

            </View>


          </View>
          <View style={{ width: "100%", height: 700, padding: 10, alignItems: 'center', textAlign: 'center' }}>
            <Text style={{
              fontSize: 19,
              textAlign: "center",
              marginTop: 20,
              textAlign: "center",
              marginBottom: 10,
              fontFamily: "TitanOne",
              color: "#17395C"
            }}>Saiba um pouco mais sobre nosso trabalho!</Text>
            <Text
              style={{
                fontSize: 19,
                textAlign: "center",
                marginTop: 20,
                textAlign: "center",
                marginBottom: 10,
                fontFamily: "LoraItalic"
              }}
            >
              A PetLove é uma empresa dedicada à adoção de cães, comprometida em encontrar
              lares amorosos para esses animais.
            </Text>
            <Text
              style={{
                fontSize: 19,
                textAlign: "center",
                textAlign: "center",
                marginBottom: 10,
                fontFamily: "LoraItalic"
              }}
            >
              Nossa objetivo é mudar o destino de animais que são abandonados e rejeitados encaminhando-os para adoção.
              Quando os finais felizes não acontecem, focamos em prover o máximo de conforto, alegria e
              dignidade para aqueles que
              não terão uma oportunidade de encontrarem uma família.
            </Text>
            <Text
              style={{
                fontSize: 19,
                textAlign: "center",
                textAlign: "center",
                marginBottom: 10,
                fontFamily: "LoraItalic"
              }}
            >
              Com uma equipe dedicada e apaixonada por animais, estamos aqui para
              ajudá-lo a encontrar o companheiro perfeito para você e sua família,
              enquanto transformamos vidas e espalhamos alegria através da adoção de
              animais fofos e amorosos.
            </Text>

            <Text style={{
              fontSize: 19,
              textAlign: "center",
              textAlign: "center",
              marginBottom: 10,
              fontFamily: "LoraItalic"
            }}>
              Adotar é um ato de amor que transforma todas as vidas ao redor. Aqui você conhecerá
              a história de vida dos nossos resgatados que receberam tratamentos e cuidados
              e agora aguardam pelo seu final feliz, a adoção!
            </Text>
            <View style={{ backgroundColor: "#e1dcc9" }}>
              <Text style={{
                fontSize: 19,
                textAlign: "center",
                textAlign: "center",
                marginBottom: 10,
                fontFamily: "TitanOne",
                color: "#17395c"
              }}>Nossos VALORES</Text>
              <Text style={{
                fontSize: 19,
                textAlign: "center",
                textAlign: "center",
                marginBottom: 10,
                fontFamily: "LoraItalic"
              }}> Amor: aos animais, amor ao próximo;
              </Text>


              <Text style={{
                fontSize: 19,
                textAlign: "center",
                textAlign: "center",
                marginBottom: 10,
                fontFamily: "LoraItalic"
              }}
              >Compaixão: desejo de aliviar, minimizar o sofrimento de outro ser senciente, bem
                como demonstrar especial gentileza para com aqueles que sofrem;
              </Text>
              <Text style={{
                fontSize: 19,
                textAlign: "center",
                textAlign: "center",
                marginBottom: 10,
                fontFamily: "LoraItalic"
              }}>Dedicação: Entrega de corpo e alma àquilo que faz. Fazer e realizar com prazer,
                com satisfação até concluir e servir de modelo a todos – equipe, sociedade;
              </Text>
              <Text style={{
                fontSize: 19,
                textAlign: "center",
                textAlign: "center",
                marginBottom: 10,
                fontFamily: "LoraItalic"
              }}>Dignidade: Valor de tudo aquilo que reveste o que não se tem preço;

              </Text>
              <Text style={{
                fontSize: 19,
                textAlign: "center",
                textAlign: "center",
                marginBottom: 10,
                fontFamily: "LoraItalic"
              }}>Respeito: reconhecer, aceitar, apreciar, valorizar as diferenças. Saber que cada ser vivo é único e merece respeito;

              </Text>
              <Text style={{
                fontSize: 19,
                textAlign: "center",
                textAlign: "center",
                marginBottom: 10,
                fontFamily: "LoraItalic"
              }}>
                Responsabilidade: praticar atos conscientes e bem-intencionados;
              </Text>
              <Text style={{
                fontSize: 19,
                textAlign: "center",
                textAlign: "center",
                marginBottom: 10,
                fontFamily: "LoraItalic"
              }}>
                Solidariedade: sensibilizar-se com a dor dos animais e ajudar da maneira mais humana possível;
              </Text>
            </View>
            <Text
              style={{ fontSize: 25, fontFamily: "TitanOne", textAlign: "center", color: "#17395C" }}
            >
              Conheça nossos amiguinhos!
            </Text>
            <Botao TxtBtn={'Pets'} estilos={styles.btnSobre} txtestilos={{ fontFamily: 'TitanOne', color: '#E1DCC9', fontSize: 18 }} onpresstxt={() => navigation.navigate('Login')} />

          </View>
        </View>
      </ScrollView>
    </View >




  );
}
