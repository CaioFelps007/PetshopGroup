// importação dos itens necessários para o código
import {
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

// importação das fontes utilizadas.
import { useFonts } from "expo-font";

// importação de itens necessários para declarar o estado e efeitos da página
import React, { useRef, useState, useEffect } from "react";

// importação dos icones
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

// importação do styles direto da pagina de estilos.
import { styles } from "../styles/StyleSheet";

// importação de componentes.
import Textos from "../components/TextComponents";
import Botao from "../components/ButtonComponents";
import HeaderHome from "../components/HeaderHome";

// importação do useNavigation para a navegação da tela para outra.
import { useNavigation } from "@react-navigation/native";

// Constante que define o valor e a dimensão da tela do dispositivo e retorna um objeto contendo o width da tela.
const screenWidth = Dimensions.get("window").width;

// constante que define a largura final do objeto, onde o valor dele é multiplicado po 0.7 obtendo o valor que ele ira retornar
const largFinal = screenWidth * 0.7;

// const que cria um Item Animado e passa uma propriedade de *item* para ele, onde iremos chama-lo no codigo assim
const AnimatedItem = ({ item }) => {
  const [mostrar, setMostrar] = useState(false); //constantes que serão utilizadas para a animação definidas como falso inicialmente
  const [mostrarTouch, setMostrarTouch] = useState(false);
  const largInicial = useRef(new Animated.Value(screenWidth * 0.9)).current; //constante que define uma referência inicial para a largura Inicial do objeto
  const [aparecendo, setAparecendo] = useState(new Animated.Value(0)); //constante definindo o valor inicial de aparecendo como 0

  //useEffect para executar um efeito quando acontecem mudanças.
  useEffect(() => {
    Animated.timing(largInicial, {
      toValue: mostrar ? largFinal : screenWidth * 0.9, //define o valor de largInicial, caso (mostrar) tiver um valor de true, é disparado a largFinal, caso seja falso, continua com 90% da tela.
      duration: 1000, //duração da animação
      useNativeDriver: false,
    }).start();
  }, [mostrar, largInicial]);

  Animated.sequence([
    //Animação em sequência.
    Animated.timing(aparecendo, {
      toValue: 369, //caso a animação de cima seja ativada, essa aparece ocupando um espaço de 369pixels
      duration: 1500,
      useNativeDriver: false,
    }),
  ]).start();

  //quando ativada, setMostrar fica com valor contrario do que estava, e setMostrarTouch fica true aparecendo o botão escondido
  const dispararAnimation = () => {
    setMostrar(!mostrar);
    setMostrarTouch(true);
  };

  // const para navegação
  const navigation = useNavigation();

  return (
    // View onde contem o botão animado.
    <View
      //Style da view
      style={{
        height: 130,
        width: screenWidth * 0.9, //largura que inicia a view na tela
        flexDirection: "row", //alinhando os itens presentes nela na horizontal
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
        backgroundColor: "#17395C",
      }}
    >
      <TouchableOpacity onPress={() => dispararAnimation()}>
        {/* botão que quando pressionado dispara a animação da constante definida! */}
        <Animated.View
          // style da view (botao) animada(o)
          style={{
            width: largInicial, //definindo a largura do botão com a constante largInicial
            height: "100%",
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            overflow: "hidden",
          }}
        >
          {/* View onde fica a Imagem */}
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

          {/* View onde fica o conteúdo/textos do botão */}
          <View
            style={{
              width: "70%",
              height: "100%",
              padding: 10,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontFamily: "TitanOne", fontSize: 19 }}>
              {item.toyDog}
            </Text>
            <Text
              style={{
                fontFamily: "LoraItalic",
                color: "green",
                marginTop: 10,
              }}
            >
              R${item.preco}
            </Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
      {/* Botão que só sera renderizado o que tiver dentro dessa condição && caso o valor dele seja true. */}
      {mostrarTouch && (
        //fragmento vazio para evitar a utilização de outro componente pai
        <>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={[
                styles.iconContainer,
                {
                  backgroundColor: "#17395C",
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                },
              ]}
              onPress={() => navigation.navigate("Carrinho")} //botão que navega para outraas paginas.
            >
              <FontAwesome name="shopping-cart" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default function Brinquedos() {
  //const data onde será armazenado todo conteudo da view animada, ids, imagens, textos, descricões e etc...
  const data = [
    {
      id: "1",
      urlImg: require("../assets/images/bolaamericana.png"),
      toyDog: "Bola de Futebol Americano!",
      preco: "59.90",
      CompraButton: "",
    },
    {
      id: "2",
      urlImg: require("../assets/images/cordapatinhas.png"),
      toyDog: "Corda Mordedora!",
      preco: "59.90",
      CompraButton: "",
    },
    {
      id: "3",
      urlImg: require("../assets/images/ossolaranja.png"),
      toyDog: "Osso de borracha!",
      preco: "59.90",
      CompraButton: "",
    },
    {
      id: "4",
      urlImg: require("../assets/images/ossoverde.png"),
      toyDog: "Kit Ossos de Pelúcia!",
      preco: "59.90",
      CompraButton: "",
    },
  ];

  // para renderizar as fontes.
  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    LoraItalic: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    // Utilização da safeAreaView para manter o conteudo da nossa tela agrupado, sem cortes de pixels
    <SafeAreaView>
      <View style={[styles.bodyHome, { backgroundColor: "white" }]}>
        <FlatList //componente FlatList onde renderizará todos os botões e seus conteudos de uma forma que fique uma tela de rolagem
          ListHeaderComponent={HeaderHome} //componente para renderizar a HeaderHome
          data={data} //para renderizar a array data
          renderItem={({ item }) => <AnimatedItem item={item} />} //renderizando o item animado
          keyExtractor={(item) => item.id} //extraindo o ID do item da array data
          contentContainerStyle={styles.flatListContent} //style da flatList
        />
      </View>
    </SafeAreaView>
  );
}
