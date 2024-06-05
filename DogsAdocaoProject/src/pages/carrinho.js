import { styles } from "../styles/StyleSheet";
import {
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
  Text,
  FlatList,
  Dimensions,
  Animated,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Textos from "../components/TextComponents";
import { useFonts } from "expo-font";
import Botao from "../components/ButtonComponents";
import React, { useRef, useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import HeaderCarrinho from "../components/HeaderCarrinho";
import { Header } from "react-native/Libraries/NewAppScreen";
import HeaderHome from "../components/HeaderHome";

const screenWidth = Dimensions.get("window").width;
const largFinal = screenWidth * 0.7;

const AnimatedItem = ({ item }) => {
  const [mostrar, setMostrar] = useState(false);
  const [mostrarTouch, setMostrarTouch] = useState(false);
  const largInicial = useRef(new Animated.Value(screenWidth * 0.9)).current;
  const [aparecendo, setAparecendo] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(largInicial, {
      toValue: mostrar ? largFinal : screenWidth * 0.9,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [mostrar, largInicial]);

  Animated.sequence([
    Animated.timing(aparecendo, {
      toValue: 369,
      duration: 1500,
      useNativeDriver: false,
    }),
  ]).start();

  const dispararAnimation = () => {
    setMostrar(!mostrar);
    setMostrarTouch(true);
  };

  return (
    <View
      style={{
        height: 120,
        width: screenWidth * 0.9,
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 20,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.7,
        shadowRadius: 8.3,
        elevation: 13,
        borderRadius: 20,
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity onPress={() => dispararAnimation()}>
        <Animated.View
          style={{
            width: largInicial,
            height: "100%",
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: "30%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={item.urlImg}
              style={{ width: "90%", height: "90%", resizeMode: "contain" }}
            />
          </View>
          <View
            style={{
              width: "70%",
              height: "100%",
              padding: 10,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontFamily: "TitanOne", fontSize: 19 }}>
              {item.Produto}
            </Text>
            <Text style={{ fontFamily: "LoraItalic" }}>{item.preco}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
      {mostrarTouch && (
        <>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={[
                styles.iconContainer,
                {
                  backgroundColor: "#17395C",
                  borderRadius: 20,
                },
              ]}
              onPress={() => console.log("HELLO")}
            >
              <FontAwesome6
                name="hand-holding-dollar"
                size={30}
                color="white"
              />

              <Text style={{ color: "white", fontFamily: "TitanOne" }}>
                Pagar
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default function Carrinho() {
  const data = [
    {
      id: "1",
      urlImg: require("../assets/images/ossoverde.png"),
      Produto: "Kit Osso pelúcia!",
      preco: "",
    },
  ];

  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    LoraItalic: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf"),
    FjallaOne: require("../assets/fonts/FjallaOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <SafeAreaView>
      <View
        style={[styles.bodyHome, { backgroundColor: "white", height: 800 }]}
      >
        <FlatList
          ListHeaderComponent={HeaderCarrinho}
          data={data}
          renderItem={({ item }) => <AnimatedItem item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
}
