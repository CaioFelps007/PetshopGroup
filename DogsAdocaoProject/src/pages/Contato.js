import { SafeAreaView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Textos from "../components/TextComponents";
import { styles } from "../styles/StyleSheet";
import { useState } from "react";
import { Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useFonts } from "expo-font";

export default function Contato() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    Lora: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf"),
    FjallaOne: require("../assets/fonts/FjallaOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }
  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.Contato}>
          <Textos
            title={"CONTATOS"}
            estilotexto={{
              fontSize: 35,
              marginTop: 30,
              color: "#17395c",
              fontFamily: "TitanOne",
            }}
          />
          <View style={styles.textos}>
            <Text style={{ fontFamily: "TitanOne", fontSize: 20 }}>
              WhatsApp:
            </Text>
            <Text style={{ fontFamily: "Lora", fontSize: 20 }}></Text>
            <Text style={{ fontFamily: "TitanOne", fontSize: 20 }}>
              E-mail:
            </Text>
            <Text style={{ fontFamily: "Lora", fontSize: 20 }}>
              petLove@gmail.com
            </Text>
            <Text style={{ fontFamily: "TitanOne", fontSize: 20 }}>
              Endereço:
            </Text>
            <Text style={{ fontFamily: "Lora", fontSize: 20 }}></Text>
          </View>

          <Text
            style={{
              marginTop: 5,
              fontFamily: "TitanOne",
              color: "#17395c",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Em caso de maus tratos
          </Text>
          <TouchableOpacity onPress={() => visModal(true)} style={styles.botao}>
            <Text
              style={{
                textAlign: "center",
                color: "#e1dcc9",
                fontFamily: "TitanOne",
                marginTop: 2,
              }}
            >
              DENÚNCIE
            </Text>
          </TouchableOpacity>
          <Modal transparent={false} animationType="fade" visible={visible}>
            <ScrollView>
              <View style={styles.modal}>
                <Text
                  style={{
                    color: "#c24229",
                    fontFamily: "TitanOne",
                    fontSize: 30,
                    textAlign: "center",
                  }}
                >
                  Denuncie maus tratos!
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Lora",
                    fontSize: 20,
                  }}
                >
                  Caso você presencie maus-tratos a animais de quaisquer
                  espécies, sejam domésticos, domesticados, silvestres ou
                  exóticos – como abandono, envenenamento, presos constantemente
                  em correntes ou cordas muito curtas, mutilação, presos em
                  espaço incompatível ao porte do animal ou em local sem
                  iluminação e ventilação, etc. , vá à delegacia de polícia mais
                  próxima para fazer o Boletim de Ocorrência (BO), ou compareça
                  à Promotoria de Justiça do Meio Ambiente.
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "TitanOne",
                    fontSize: 25,
                  }}
                >
                  Saiba como proceder na delegacia
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Lora",
                    fontSize: 20,
                  }}
                >
                  -Tente descrever com exatidão os fatos ocorridos, o local e,
                  se possível, o nome e endereço do(s) responsável(s).
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Lora",
                    fontSize: 20,
                  }}
                >
                  -Também procure levar, caso haja possibilidade, alguma
                  evidência, como fotos, vídeos, notícias de jornais, mapas,
                  laudo ou atestado veterinário, nome de testemunhas e endereço
                  das mesmas. Quanto mais detalhada a denúncia, melhor.
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "TitanOne",
                    textAlign: "center",
                    color: "#c24229",
                  }}
                >
                  Saiba que maus-tratos a qualquer animal é CRIME !! Denuncie
                  todo e qualquer tipo de maus tratos aos animais ! Procure
                  sempre a delegacia mais próxima para ser instruído com relação
                  ao procedimento de denúncia formal !
                </Text>
                <Text
                  style={{
                    fontFamily: "FjallaOne",
                    fontSize: 30,
                    textAlign: "center",
                  }}
                >
                  Ajude-nos a proteger nossos amiguinhos
                </Text>

                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <TouchableOpacity
                    onPress={() => visModal(false)}
                    style={styles.btnModal}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "#e1dcc9",
                        fontSize: 20,
                        fontFamily: "TitanOne",
                      }}
                    >
                      Voltar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
}
