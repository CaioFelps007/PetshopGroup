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

  // Função que vai rodar uma sequencia de animação, diminuindo a largura e a altura em sequencia.
  Animated.sequence([
    Animated.timing(altura, {
      toValue: 70,
      duration: 1000,
      useNativeDriver: false,
    }),

  ]).start();



  return (
    <SafeAreaView style={styles.containerDois}>
      <ScrollView >
        <View style={styles.containerDois}>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
