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
} from "react-native";
import { styles } from "../styles/StyleSheet";
import Carousel from "react-native-snap-carousel";
import { ScrollView } from "react-native-gesture-handler";
import Textos from "../components/TextComponents";
import Botao from "../components/ButtonComponents";
import { useFonts } from "expo-font";
import { useRef, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import BotaoImage from "../components/ButtonImage";

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;
const largFinal = screenWidth * 0.7;

const AnimatedItem = ({ item }) => {
  const [mostrar, setMostrar] = useState(false);
  const [mostrarTouch, setMostrarTouch] = useState(false);
  const largInicial = useRef(new Animated.Value(screenWidth * 0.9)).current;
  const [aparecendo, setAparecendo] = useState(new Animated.Value(0))

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
    <Animated.View style={{
      width: aparecendo
    }}>
      <View style={{
        height: 130,
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
        backgroundColor: "#EFB758",
      }}>
        <TouchableOpacity onPress={() => dispararAnimation()}>
          <Animated.View
            style={{
              width: largInicial,
              height: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: 'row',
              overflow: 'hidden'
            }}
          >
            <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={item.urlImg} style={{ width: '90%', height: '90%', resizeMode: 'contain' }} />
            </View>
            <View style={{ width: '70%', height: '100%', padding: 10, justifyContent: 'center' }}>
              <Text style={{ fontFamily: 'TitanOne', fontSize: 19 }}>{item.nameDog}</Text>
              <Text style={{ fontFamily: 'LoraItalic' }}>{item.sexoDog}, {item.IdadeDog}</Text>
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
                onPress={() => console.log("HELLO")}
              >
                <FontAwesome name="heart" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[
                styles.iconContainer,
                {
                  backgroundColor: "#17395C",
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                },
              ]}
              onPress={() => console.log("BYE")}
            >
              <MaterialIcons name="description" size={24} color="white" />
            </TouchableOpacity>
          </>
        )}
      </View>
    </Animated.View>

  );
};




export default function Home() {

  const data = [
    { id: "1", urlImg: require("../assets/images/cachorroToys.png"), nameDog: "Scooby", sexoDog: "Macho", IdadeDog: '4 meses' },
    { id: "2", urlImg: require("../assets/images/dogPng.png"), nameDog: "Alexandre", sexoDog: "Femea", IdadeDog: '14 anos' },
    { id: "3", urlImg: require("../assets/images/cachorrinsorri.png"), nameDog: "Alexo", sexoDog: "Macho", IdadeDog: '12 meses' },


  ];


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
    LoraItalic: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf")
  });

  if (!fontsLoaded) {
    return undefined;
  }

  // Constante de estado que define o valor de largura e altura inicial.


  // Função que vai rodar uma sequencia de animação, diminuindo a largura e a altura em sequencia.



  return (
    <SafeAreaView style={styles.containerDois}>
      <ScrollView >
        <View style={styles.containerDois}>


          <View style={styles.HeaderUser}>
            <Textos title={"Olá Usuario"} estilotexto={[styles.hduser, { fontFamily: 'TitanOne' }]} />
          </View>

          <View style={styles.bodyHome}>


            <FlatList
              data={data}
              renderItem={({ item }) => <AnimatedItem item={item} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.flatListContent}
            />



          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
