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

export default function Home() {
  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  // Constante de estado que define o valor de largura e altura inicial.
  const [altura, setAltura] = useState(new Animated.Value(100));

  // Função que vai rodar uma sequencia de animação, diminuindo a largura e a altura em sequencia.
  Animated.sequence([
    Animated.timing(altura, {
      toValue: 0,
      duration: 8000,
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
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 30,
            }}
          >
            <Animated.Image
              source={require("../assets/images/cachorrinsorri.png")}
              style={{ height: altura, width: 140, borderRadius: 120 }}
            />
            <Text
              style={{
                color: "black",
                textAlign: "center",
                fontSize: 23,
                fontWeight: "bold",
              }}
            >
              Olá Aumigo, Seja bem Vindo !
            </Text>
          </Animated.View>

          <View style={styles.paginaHome}>
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
                height: 100,
                width: "100%",
                marginTop: 10,
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
              />
              <Botao
                TxtBtn={"Contato"}
                estilos={[styles.btnHome, { marginLeft: 20 }]}
                txtestilos={{
                  fontSize: 16,
                  fontFamily: "TitanOne",
                  color: "#17395C",
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
