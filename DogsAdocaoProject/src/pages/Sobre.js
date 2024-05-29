import { styles } from "../styles/StyleSheet";
import { Text, View, Image, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView, Modal } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Botao from "../components/ButtonComponents";
import Textos from "../components/TextComponents";

import { useState } from "react";

import { useFonts } from "expo-font";


export default function Sobre() {

  const [visible, setVisible] = useState(false);


  const SubirModal = () => {
    setVisible(true)
  }
  const FecharModal = () => {
    setVisible(false)
  }
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    LoraItalic: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf"),
    FjallaOne: require("../assets/fonts/FjallaOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }
  return (
    <SafeAreaView style={styles.containerDoisSobre}>
      <ImageBackground source={require('../assets/images/imgSobre.png')} style={{ height: 420, width: '100%' }}>
        <View style={{ flex: 1, backgroundColor: '#00000088', justifyContent: 'center' }}>
          <Text style={{ fontFamily: "TitanOne", fontSize: 28, color: "#FFF", marginLeft: 20 }}>PetLove</Text>
          <Text style={{ textAlign: "justify", fontFamily: "FjallaOne", fontSize: 20, marginLeft: 20, color: "#FFF" }}>Saiba mais sobre nossa empresa</Text>
        </View>
      </ImageBackground>



      <Modal transparent={true} animationType="slide" visible={true} >
        <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-end' }}>

          <View style={{
            borderTopRightRadius: 30, borderTopLeftRadius: 30,
            height: '60%',
            width: "80%",
            backgroundColor: '#FFF',
            backgroundColor: "#FFF",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
            elevation: 5,
            padding: 20
          }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.textSobre}>Somos uma empresa dedicada à adoção de cães, comprometida
                em encontrar lares amorosos para esses animais.</Text>


              <Text style={styles.textSobre}> Nossa missão é tirar o maior número possível de animais das ruas, dar
                tratamento adequado e integrá-los a famílias que lhes deem amor, carinho e uma vida digna.
                Quando os finais felizes não acontecem, focamos em prover o máximo de conforto, alegria e dignidade para
                aqueles que não terão uma oportunidade de encontrarem uma família.</Text>


              <Text style={styles.textSobre}>Nosso objetivo é criar conexões duradouras entre famílias e seus
                novos membros de quatro patas, priorizando o bem-estar dos animais
                em cada passo do processo de adoção.</Text>



              <Text style={styles.textSobre}> Com uma equipe dedicada e apaixonada por animais, estamos aqui para
                ajudá-lo a encontrar o companheiro perfeito para você e sua família,
                enquanto transformamos vidas e espalhamos alegria através da
                adoção.</Text>


              <Text style={styles.textSobre}>Adotar um animal é um ato de amor e responsabilidade. Não é apenas abrir as portas de casa, mas
                também o coração, entendendo que aquele novo membro precisa de cuidado, atenção e carinho. Antes de
                tomar essa decisão, é essencial refletir sobre a capacidade de oferecer um lar onde o animal se sinta
                seguro e amado.</Text>
              <Text style={styles.textSobre}>Isso significa proporcionar uma alimentação adequada, espaço para se movimentar, cuidados
                veterinários regulares e, acima de tudo, tempo para brincar e se conectar. A escolha do animal deve ser
                feita com carinho, considerando o estilo de vida da família e as necessidades específicas do pet.</Text>
              <Text style={styles.textSobre}>Adotar é se comprometer a educar-se sobre como cuidar melhor do seu novo amigo, respeitando suas
                particularidades e proporcionando uma vida digna e feliz.</Text>
              <Text style={styles.textSobre2}>A adoção de animais transforma vidas – a do animal e a da família adotante – trazendo
                alegria, companheirismo e uma nova perspectiva sobre o que significa amar incondicionalmente.</Text>
            </ScrollView>
          </View>

        </View>


      </Modal>
    </SafeAreaView >


  );
}
