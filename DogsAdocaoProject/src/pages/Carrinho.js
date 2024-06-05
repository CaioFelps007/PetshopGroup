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
  Modal
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Textos from "../components/TextComponents";
import { useFonts } from "expo-font";
import Botao from "../components/ButtonComponents";
import React, { useRef, useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

import HeaderCarrinho from "../components/HeaderCarrinho";
import { Header } from "react-native/Libraries/NewAppScreen";
import HeaderHome from "../components/HeaderHome";
import FooterCarrinho from "../components/FooterCarrinho";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
const largFinal = screenWidth * 0.7;

const AnimatedItem = ({ item }) => {
  const [mostrar, setMostrar] = useState(false);
  const [mostrarTouch, setMostrarTouch] = useState(false);
  const largInicial = useRef(new Animated.Value(screenWidth * 0.9)).current;
  const [aparecendo, setAparecendo] = useState(new Animated.Value(0));

  ///ELE DEFINE A ANIMACAO, DURACAO, LARGURA, APARECER E SAIR E ETC
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

  ////MOSTRAR ANIMACÃO QUANDO CLICAR
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
        marginTop: 10,

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
      {/* botao com animacao, */}
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
            {/* imagem de pagar */}
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
            <Text style={{ fontFamily: "LoraItalic", color: 'green' }}>{item.preco}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
      {mostrarTouch && (
        <>

          {/* botao de pagar */}
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={[
                styles.iconContainer,
                {
                  backgroundColor: "crimson",
                  borderRadius: 20,
                },
              ]}

            >
              <FontAwesome6 name="trash-alt" size={27} color="white" />

              <Text ext style={{ color: "white", fontFamily: "TitanOne", marginTop: 10 }}>
                Excluir
              </Text>
            </TouchableOpacity>

          </View>
        </>
      )}



    </View>
  );
};
// exportanto carrinho
export default function Carrinho() {

  const [visible, setVisible] = useState(false);

  // ta dicidindo quando vai aparecer // useState dicidindo o estado padrao
  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };
  // const responsavel pelos produtos
  const data = [
    {
      id: "1",
      urlImg: require("../assets/images/ossoverde.png"),
      Produto: "Kit Osso pelúcia!",
      preco: "90.99",
    },
    {
      id: "2",
      urlImg: require("../assets/images/pedigreePreto.png"),
      Produto: "Corda Pedigree Adultos 1,1kg!",
      preco: "109.90",
    },
    {
      id: "3",
      urlImg: require("../assets/images/bolaamericana.png"),
      Produto: "Corda Pedigree Adultos 1,1kg!",
      preco: "109.90",

    },
    {
      id: "4",
      urlImg: require("../assets/images/ossolaranja.png"),
      Produto: "Corda Pedigree Adultos 1,1kg!",
      preco: "109.90",

    },
  ];
  //  const para criar as fontes
  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    LoraItalic: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf"),
    FjallaOne: require("../assets/fonts/FjallaOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  const navigation = useNavigation();

  return (

    <SafeAreaView>

      <Modal transparent={false} animationType="slide" visible={visible}>

        <View style={{ height: 60, backgroundColor: '#17395C', paddingLeft: 20, flexDirection: 'row', gap: 50, paddingTop: 20 }}>

          <TouchableOpacity

            onPress={() => visModal(false)}
          >
            <AntDesign name="arrowleft" size={24} color="white" />

          </TouchableOpacity>

          <Text style={{ fontFamily: 'TitanOne', fontSize: 20, color: 'white' }}>PÁGINA PAGAMENTO</Text>

        </View>


        {/* VIEW PARA COLOCAR OS BANCOS */}
        <View style={{ height: 600, backgroundColor: 'white', borderTopRightRadius: 50, borderTopLeftRadius: 50, padding: 30, alignItems: 'center' }}>


          <Text style={{ fontFamily: 'TitanOne', fontSize: 17, marginTop: 10 }}>PROSSEGUIR PARA O PAGAMENTO...</Text>
          <Text style={{ fontFamily: 'FjallaOne', fontSize: 17, marginTop: 10, color: 'burlywood', left: -40 }}>Escolha sua forma de pagamento...</Text>


          <TouchableOpacity style={{
            height: 70,
            width: 320,
            shadowOffset: { width: 0, height: 5 },
            shadowColor: "black",
            shadowRadius: 5,
            shadowOpacity: 0.5,
            elevation: 10,
            backgroundColor: 'white',
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
            borderRadius: 15,
            gap: 20
          }}>

            <Image style={{ height: 70, width: 70 }} source={require('../assets/images/nubank.png')} />
            <Text style={{ fontFamily: 'TitanOne', color: 'blueviolet', fontSize: 17 }}>
              Banco Nubank
            </Text>


          </TouchableOpacity>


          {/* BANCO SANTANDER */}
          <TouchableOpacity style={{
            height: 70,
            width: 320,
            shadowOffset: { width: 0, height: 5 },
            shadowColor: "black",
            shadowRadius: 5,
            shadowOpacity: 0.5,
            elevation: 10,
            backgroundColor: 'white',
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
            borderRadius: 15,
            gap: 20
          }}>

            <Image style={{ height: 70, width: 70 }} source={require('../assets/images/santander.png')} />
            <Text style={{ fontFamily: 'TitanOne', color: 'red', fontSize: 17 }}>
              Banco Santander
            </Text>


          </TouchableOpacity>

          {/* PAGAR NO PIX */}
          <TouchableOpacity style={{
            height: 70,
            width: 320,
            shadowOffset: { width: 0, height: 5 },
            shadowColor: "black",
            shadowRadius: 5,
            shadowOpacity: 0.5,
            elevation: 10,
            backgroundColor: 'white',
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
            borderRadius: 15,
            gap: 30
          }}>

            <Image style={{ height: 60, width: 60 }} source={require('../assets/images/pixLogo.png')} />

            <Text style={{ fontFamily: 'TitanOne', color: 'silver', fontSize: 17 }}>
              Pagar no Pix
            </Text>

          </TouchableOpacity>

        </View>

      </Modal>


      <View
        style={[styles.bodyHome, { backgroundColor: "white", height: 800 }]}
      >
        <FlatList ///ELE CHAMA A IMAGEM DE FUNDO E OS BOTOES //
          ListHeaderComponent={HeaderCarrinho}
          data={data}
          renderItem={({ item }) => <AnimatedItem item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
        />
        <View style={{
          height: 100, width: '100%', backgroundColor: '#17395C', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', gap: 12

        }}>


          <Text style={{ fontSize: 16, fontFamily: 'TitanOne', top: -10, color: 'white', }}>
            Valor: R$200,09
          </Text>
          < TouchableOpacity style={[styles.ButtonFooter, { backgroundColor: 'green' }]}
            onPress={() => visModal(true)}>
            <Text style={{ fontFamily: 'TitanOne', color: 'white' }}>
              Concluir Compra
            </Text>
          </TouchableOpacity>
          < TouchableOpacity style={styles.ButtonFooter}
            onPress={() => navigation.navigate("Home")}>
            <Text style={{ fontFamily: 'TitanOne', color: 'white' }}>
              Voltar as Compras
            </Text>
          </TouchableOpacity>
        </View>
      </View >
    </SafeAreaView >
  );
}
