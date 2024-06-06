import {
  View,
  SafeAreaView,
  Text,
  Animated,
  ImageBackground,
} from "react-native";
import { styles } from "../styles/StyleSheet";
import Botao from "../components/ButtonComponents";
import Textos from "../components/TextComponents";
import { Image } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Descricao({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();
  const [selectedImg, setSelectedImg] = useState(item.urlImg);

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

      <View
        style={{
          flex: 1,
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
            backgroundColor: "pink",
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
            backgroundColor: "purple",
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
            backgroundColor: "red",
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
            backgroundColor: "green",
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
      </View>
    </View>
  );
}
