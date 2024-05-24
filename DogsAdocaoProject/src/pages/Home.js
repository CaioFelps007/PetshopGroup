import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/StyleSheet";
import Carousel from "react-native-snap-carousel";
import { ScrollView } from "react-native-gesture-handler";
import Textos from "../components/TextComponents";
import Botao from "../components/ButtonComponents";
import { useFonts } from "expo-font";
import { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BotaoImage from "../components/ButtonImage";

import { AntDesign } from '@expo/vector-icons';

export default function Home() {

  const scrollViewRef = useRef(null);

  const scrollTosection = (section) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: section,
        animated: true,
      })
    }
  };


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
  const [larguraImg, setLarguraImg] = useState(new Animated.Value(0));
  const [larguraImgDois, setLarguraImgDois] = useState(new Animated.Value(0));
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
      toValue: 1200,
      duration: 3000,
      useNativeDriver: false,
    }),
    Animated.timing(larguraImg, {
      toValue: 180,
      duration: 3000,
      useNativeDriver: false,
    }),
    Animated.timing(larguraImgDois, {
      toValue: 150,
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
      <ScrollView ref={scrollViewRef}>
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

            <Image source={require('../assets/images/patasFundo.png')} style={{ width: 60, height: 60, position: 'relative', right: -160 }} />

            <Textos
              title={"Conheça mais sobre nós:"}
              estilotexto={[
                styles.TextoHome,
                {
                  fontSize: 18,
                  fontFamily: "TitanOne",
                  marginTop: 10,
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
            <TouchableOpacity onPress={() => scrollTosection(750)} style={styles.ButtonDescer}>
              <AntDesign name="arrowdown" size={30} color="white" />
            </TouchableOpacity>
            <View>
              <View style={{
                height: 170,
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 80,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#EFB758'
              }}>

                <Animated.Image
                  source={require("../assets/images/cachorroToys.png")}
                  style={{ height: 150, width: larguraImgDois }}
                />
                <View>
                  <Textos title={"Visite nossa pagina "} estilotexto={{ fontFamily: 'TitanOne', fontSize: 17, color: '#EFB758' }} />

                  <Textos title={"produtos!"} estilotexto={{ fontFamily: 'TitanOne', textAlign: 'center', fontSize: 25, color: '#EFB758', marginTop: 5 }} />
                </View>


              </View>

              <View style={{
                height: 170,
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 200,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#EFB758'
              }}>


                <View>
                  <Textos title={"Visite nossa pagina "} estilotexto={{ fontFamily: 'TitanOne', fontSize: 17, color: '#EFB758' }} />

                  <Textos title={"produtos!"} estilotexto={{ fontFamily: 'TitanOne', textAlign: 'center', fontSize: 25, color: '#EFB758', marginTop: 5 }} />
                </View>

                <View>
                  <Animated.Image
                    source={require("../assets/images/dogrunner2d.png")}
                    style={{ height: 200, width: larguraImg }}
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
