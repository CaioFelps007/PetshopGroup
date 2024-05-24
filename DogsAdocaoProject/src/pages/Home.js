import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  Animated,
} from "react-native";
import { styles } from "../styles/StyleSheet";
import Carousel from "react-native-snap-carousel";
import { ScrollView } from "react-native-gesture-handler";
import Textos from "../components/TextComponents";
import Botao from "../components/ButtonComponents";
import { useFonts } from "expo-font";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BotaoImage from "../components/ButtonImage";

export default function Home() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  // Constante de estado que define o valor de largura e altura inicial.
  const [altura, setAltura] = useState(new Animated.Value(500));
  const [alturaImg, setAlturaImg] = useState(new Animated.Value(350));
  const [alturaDois, setAlturaDois] = useState(new Animated.Value(0));

  // Função que vai rodar uma sequencia de animação, diminuindo a largura e a altura em sequencia.
  Animated.sequence([
    Animated.timing(alturaImg, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: false,
    }),
    Animated.timing(alturaImg, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: false,
    }),
    Animated.timing(altura, {
      toValue: 70,
      duration: 1000,
      useNativeDriver: false,
    }),
    Animated.timing(alturaDois, {
      toValue: 700,
      duration: 3000,
      useNativeDriver: false,
    }),
  ]).start();

  const data = [
    {
      imgUrl: require("../assets/images/imgCarrUm.png"),
    },

    {
      imgUrl: require("../assets/images/ImgCarDois.png"),
    },
    {
      imgUrl: require("../assets/images/ImgCarTres.png"),
    },
  ];

  function CarouselCardItem({ item }) {
    return (
      <View style={styles.containerCarousel}>
        <Image source={item.imgUrl} style={styles.img} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.containerDois}>
      <ScrollView>
        <View style={styles.containerDois}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 300,
            }}
          >
            <Carousel
              data={data}
              renderItem={CarouselCardItem}
              sliderWidth={400}
              itemWidth={400}
              autoplay={true}
              autoplayInterval={3000}
              loop={true}
              layout={"default"}
              layoutCardOffset={`9`}
            />
          </View>

          <Animated.View
            style={{
              width: "100%",
              height: altura,
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Animated.Image
              source={require("../assets/images/dogrunner2d.png")}
              style={{
                height: alturaImg,
                width: 230,
              }}
            />
            <Text
              style={{
                color: "#EFB758",
                textAlign: "center",
                fontSize: 23,
                fontFamily: "TitanOne",
                marginTop: 25,
              }}
            >
              Olá Aumigo, Seja bem Vindo!
            </Text>
          </Animated.View>

          <Animated.View style={[styles.paginaHome, { height: alturaDois }]}>
            <Text style={[styles.TextoHome, { fontFamily: "TitanOne" }]}>
              O melhor aplicativo de pet para você !
            </Text>

            <Textos
              title={"Conheça mais sobre nós:"}
              estilotexto={[
                styles.TextoHome,
                {
                  fontSize: 18,
                  fontFamily: "TitanOne",
                  marginTop: 70,
                  left: -55,
                },
              ]}
            />

            <View
              style={{
                height: 80,
                width: "100%",
                marginTop: 20,
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Botao
                TxtBtn={"Nossa equipe"}
                estilos={styles.btnHome}
                txtestilos={{
                  fontSize: 16,
                  fontFamily: "TitanOne",
                  color: "#17395C",
                }}
                onpresstxt={() => navigation.navigate("Sobre")}
              />
              <Botao
                TxtBtn={"Contato"}
                estilos={[styles.btnHome, { marginLeft: 20 }]}
                txtestilos={{
                  fontSize: 16,
                  fontFamily: "TitanOne",
                  color: "#17395C",
                }}
                onpresstxt={() => navigation.navigate("Contato")}
              />
            </View>

            <View>
              <Textos
                title={"Nossos Pets!:"}
                estilotexto={[
                  styles.TextoHome,
                  {
                    fontSize: 18,
                    fontFamily: "TitanOne",
                    left: -110,
                    marginTop: 20,
                  },
                ]}
              />

              <View
                style={{
                  height: 170,
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <BotaoImage
                  fundoBotao={require("../assets/images/dogsBrincando.png")}
                  estilos={[styles.btnHome, { height: 135, width: 190 }]}
                />
                <View style={{ padding: 10 }}>
                  <Textos
                    title={"Encontre"}
                    estilotexto={{
                      fontFamily: "TitanOne",
                      textAlign: "center",
                      fontSize: 16,
                    }}
                  />
                  <Textos
                    title={"seu melhor amigo"}
                    estilotexto={{ fontFamily: "TitanOne" }}
                  />
                  <Textos
                    title={"AQUI!"}
                    estilotexto={{
                      fontFamily: "TitanOne",
                      textAlign: "center",
                      fontSize: 20,
                      marginTop: 10,
                    }}
                  />
                </View>
              </View>
            </View>
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
