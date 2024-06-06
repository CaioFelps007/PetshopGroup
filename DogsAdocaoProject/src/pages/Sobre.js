import { styles } from "../styles/StyleSheet";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Animated,
  Modal,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { useIsFocused } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();
  const [textSobre, setTextSobre] = useState({});
  const isFocused = useIsFocused();
  const screenHeight = Dimensions.get("window").height;
  const aparecendo = new Animated.Value(0);

  useEffect(() => {
    alert("ESTOUAQUI!");
    if (isFocused) {
      readSobre();
    }
  }, [isFocused]);

  async function readSobre() {
    try {
      const response = await axios.get(
        "http://192.168.1.143:3000/api/readSobre"
      );
      setTextSobre(response.data);
      console.log(response.conteudo);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    LoraItalic: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf"),
    FjallaOne: require("../assets/fonts/FjallaOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{ flex: 1, backgroundColor: "pink" }}>
        <ImageBackground
          source={require("../assets/images/imgSobre.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#00000088",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "TitanOne",
                fontSize: 28,
                color: "#FFF",
                marginLeft: 20,
              }}
            >
              PetLove
            </Text>
            <Text
              style={{
                textAlign: "justify",
                fontFamily: "FjallaOne",
                fontSize: 20,
                marginLeft: 20,
                color: "#FFF",
              }}
            >
              Saiba mais sobre nossa empresa
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Animated.View
          style={{
            height: "120%",
            width: "75%",
            backgroundColor: "#FFFFFF",
            zIndex: 1,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
            elevation: 5,
            padding: 20,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text>
              {textSobre[0].conteudo ? textSobre[0].conteudo : "Carregando..."}
            </Text>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
