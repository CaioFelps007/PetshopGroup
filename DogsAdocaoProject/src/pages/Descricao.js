// importação dos itens necessários para o código
import {
  View,
  SafeAreaView,
  Text,
  Animated,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

//importação do sty
import { styles } from "../styles/StyleSheet";

//importação das pagina de components
import Botao from "../components/ButtonComponents";
import Textos from "../components/TextComponents";

// importação de itens necessários para declarar o estado e efeitos da página
import React, { useState, useEffect } from "react";

//importação das fontes
import { useFonts } from "expo-font";

import { useNavigation } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";

export default function Descricao({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();
  const [selectedImg, setSelectedImg] = useState(item.urlImg);

  const [aparecerView, setAparecerView] = useState(new Animated.Value(390));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(aparecerView, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [aparecerView]);

  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    Lora: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf"),
    FjallaOne: require("../assets/fonts/FjallaOne-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#17395c" }}>
      <Image source={selectedImg} style={{ width: "100%", height: "50%" }} />

      <Animated.View
        style={{
          transform: [{ translateY: aparecerView }],
          height: "50%",
          width: "100%",
          backgroundColor: "white",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          padding: 7,
        }}
      >
        <View
          style={{
            width: "100%",
            height: "15%",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontFamily: "TitanOne",
              textAlign: "flex-end",
              fontSize: 28,
            }}
          >
            {item.nameDog}
          </Text>
          <View
            style={{
              shadowOffset: { width: 0, height: 5 },
              shadowColor: "black",
              shadowRadius: 100,
              shadowOpacity: 0.5,
              elevation: 5,
              backgroundColor: "white",
              width: 40,
              height: 40,
              borderRadius: 200,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <MaterialIcons name="pets" size={24} color="black" />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "50%",
            backgroundColor: "white",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Lora",
              textAlign: "center",
              fontSize: 17,
              width: "100%",
              textAlign: "justify",
            }}
          >
            {item.Descricao}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: "20%",
            backgroundColor: "white",
            padding: 5,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 70,
              height: "100%",
              backgroundColor: "#FFF",
              borderRadius: 200,
              marginRight: 10,
              overflow: "hidden",
              shadowOffset: { width: 0, height: 5 },
              shadowColor: "black",
              shadowRadius: 100,
              shadowOpacity: 0.5,
              elevation: 5,
            }}
            onTouchStart={() => setSelectedImg(item.urlImg)}
          >
            <ImageBackground
              source={item.urlImg}
              style={{ width: "100%", height: "100%" }}
            ></ImageBackground>
          </View>
          <View
            style={{
              width: 70,
              height: "100%",
              backgroundColor: "black",
              borderRadius: 200,
              marginRight: 10,
              overflow: "hidden",
              shadowOffset: { width: 0, height: 5 },
              shadowColor: "black",
              shadowRadius: 100,
              shadowOpacity: 0.5,
              elevation: 5,
            }}
            onTouchStart={() => setSelectedImg(item.urlImg1)}
          >
            <ImageBackground
              source={item.urlImg1}
              style={{ width: "100%", height: "100%" }}
            ></ImageBackground>
          </View>
          <View
            style={{
              width: 70,
              height: "100%",
              backgroundColor: "black",
              borderRadius: 200,
              marginRight: 10,
              overflow: "hidden",
              shadowOffset: { width: 0, height: 5 },
              shadowColor: "black",
              shadowRadius: 100,
              shadowOpacity: 0.5,
              elevation: 5,
            }}
            onTouchStart={() => setSelectedImg(item.urlImg2)}
          >
            <ImageBackground
              source={item.urlImg2}
              style={{ width: "100%", height: "100%" }}
            ></ImageBackground>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "15%",
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Contato")}
            style={{
              backgroundColor: "#17395c",
              padding: 7,
              width: "80%",
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontFamily: "TitanOne",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Quero Adotar
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}
