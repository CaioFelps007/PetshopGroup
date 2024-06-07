import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  Animated,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Modal,
} from "react-native";

import { styles } from "../styles/StyleSheet";
import { useFonts } from "expo-font";
import React, { useRef, useState, useEffect } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Textos from "../components/TextComponents";
import Botao from "../components/ButtonComponents";
import Modall from "../components/ModalComponent";
import HeaderHome from "../components/HeaderHome";
import { useNavigation } from "@react-navigation/native";

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

  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  return (
    <View
      style={{
        height: 130,
        width: screenWidth * 0.9,
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 20,

        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.7,
        shadowRadius: 8.3,
        elevation: 13,
        borderRadius: 20,
        backgroundColor: "#EFB758",
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
              {item.nameDog}
            </Text>
            <Text style={{ fontFamily: "LoraItalic" }}>
              {item.sexoDog}, {item.IdadeDog}
            </Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
      {mostrarTouch && (
        <>
          <View style={{ flex: 1, backgroundColor: "#17395C" }}>
            <TouchableOpacity
              style={[
                styles.iconContainer,
                {
                  backgroundColor: "#EFB758",
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                },
              ]}
              onPress={() => navigation.navigate("Contato")}
            >
              <FontAwesome name="heart" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Descricao", { item })}
            style={[
              styles.iconContainer,
              {
                backgroundColor: "#17395C",
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
              },
            ]}
          >
            <MaterialIcons name="description" size={24} color="white" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default function Home() {
  const data = [
    {
      id: "1",
      urlImg: require("../assets/images/viraLata.png"),
      urlImg1: require("../assets/images/viraLata2.png"),
      urlImg2: require("../assets/images/viraLata3.png"),
      nameDog: "Scooby",
      sexoDog: "Macho",
      IdadeDog: "4 meses",
      Descricao:
        "Scooby tem 4 meses, é um cão com a personalidade forte, brincalhão, ótimo para fazer companhia,Possui todas suas vacinas em dia, não foi castrado por conta de seu tempo de vida (castração é permitido depois de 6 meses de vida do animal). Seu brinquedo preferido é uma bolinha laranja.",
      Raca: "Vira-Lata",
    },
    {
      id: "2",
      urlImg: require("../assets/images/pandora.png"),
      urlImg1: require("../assets/images/pandora2.png"),
      urlImg2: require("../assets/images/pandora3.png"),
      nameDog: "Pandora",
      sexoDog: "Femea",
      IdadeDog: "14 anos",
      Descricao:
        "Pandora tem 14 anos, é uma cachorra mais tranquila por conta de sua idade, ótima para fazer companhia, Possui todas suas vacinas em dia, já foi castrada com 1 ano de vida. Seu brinquedo preferido é um pompom.",
      Raca: "Border-collie",
    },
    {
      id: "3",
      urlImg: require("../assets/images/goti.png"),
      urlImg1: require("../assets/images/goti2.png"),
      urlImg2: require("../assets/images/goti3.png"),
      nameDog: "Goti",
      sexoDog: "Macho",
      IdadeDog: "12 meses",
      Descricao:
        "Goti tem 12 meses, é um cão brincalhão, ótimo para conviver com crianças, Goti foi resgatado de um local abandonado, não foi castrado, precisa tomar vermifugo e vacina contra gripe canina. seu brinquedo preferido é um osso de borracha.",
      Raca: "Vira-Lata",
    },
    {
      id: "4",
      urlImg: require("../assets/images/yorkshire2.png"),
      urlImg1: require("../assets/images/Yorkshire.png"),
      urlImg2: require("../assets/images/Yorkshire3.png"),
      nameDog: "Aikha",
      sexoDog: "Femea",
      IdadeDog: "4 anos",
      Descricao:
        "Aikha tem 4 anos, possui uma personalidade forte, bricalhona, ótima para fazer companhia, Possui todas suas vacinas em dia, foi castrada com 3 anos após dar a luz a 4 filhotes. Seu passatempo preferido é morder chinelo.",
      Raca: "Yorkshire",
    },
    {
      id: "5",
      urlImg: require("../assets/images/peter.png"),
      urlImg1: require("../assets/images/peter2.png"),
      urlImg2: require("../assets/images/peter3.png"),
      nameDog: "Peter",
      sexoDog: "Macho",
      IdadeDog: "3 anos",
      Descricao:
        "Peter tem 3 anos, é um cão medroso, foi encontrado em situações de maus tratos, depois que pega confiança fica brincalhão e vira um cão ótimo para fazer companhia para crianças, Possui todas suas vacinas em dia, não foi castrado. Seu brinquedo preferido é um brinquedo de dinossauro.",
      Raca: "Shih-tzu",
    },
  ];

  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    LoraItalic: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <SafeAreaView style={styles.containerDois}>
      <FlatList
        ListHeaderComponent={HeaderHome}
        data={data}
        renderItem={({ item }) => <AnimatedItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
}
