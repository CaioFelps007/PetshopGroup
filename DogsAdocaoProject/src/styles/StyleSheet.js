import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  containerDois: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },

  containerDoisSobre: {
    height: 1100,
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },

  containerSobre: {
    height: 1000,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  // TELA INICIAL
  boasVindas: {
    width: "100%",
    paddingLeft: 40,
  },

  tituloWelcome: {
    fontSize: 25,
    fontWeight: "bold",
  },

  tituloName: {
    fontSize: 30,
    fontWeight: "bold",
  },

  subtitulo: {
    fontSize: 17,
  },

  ViewImage: {
    width: "100%",
    height: 370,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginBottom: 30,
    borderRadius: 200,
  },

  imagemInicial: {
    width: 220,
    height: 420,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "blue",
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  ButtonsInicial: {
    marginTop: 20,
  },

  ButtonsInicio: {
    width: "100%",
    height: 350,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonInicial: {
    borderRadius: 7,
    backgroundColor: "#17395C",
    width: 325,
    height: 45,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "blue",
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
  },
  conteudobotao: {
    color: "white",
    fontSize: 17,
  },

  //cadastro
  formularioCadastro: {
    width: 350,
    height: 420,
    backgroundColor: "white",
    marginBottom: 100,
    borderRadius: 35,
    padding: 20,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
    marginTop: 10,
  },

  fundoCadastro: {
    width: "100%",
    height: 870,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    paddingTop: 90,
  },

  //LOGIN

  fundoLogin: {
    width: "100%",
    height: 870,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    paddingTop: 70,
  },

  formularioLogin: {
    width: 350,
    height: 350,
    backgroundColor: "white",
    borderRadius: 35,
    padding: 20,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  caixatextoLogin: {
    borderBottomColor: "#17395C",
    borderBottomWidth: 2,
    margin: 10,
    height: 55,
  },

  ButtonLogin: {
    backgroundColor: "#17395C",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 150,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  ButtonVoltar: {
    width: 30,
    height: 40,
    marginLeft: 30,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  // ESTILO HOME
  paginaHome: {
    height: 1000,
    width: "100%",
    alignItems: "center",
  },

  HeaderUser: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    height: 200,
    padding: 25,
  },

  hduser: {
    fontSize: 17,
    marginTop: 20,
  },

  btnsHomePage: {
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 5,
    elevation: 9,
    width: 110,
    height: 39,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
  },

  activeButtonText: {
    color: "#17395C",
  },

  flatListContent: {
    justifyContent: "flex-start",
    flexGrow: 1,
    alignItems: "center",
  },

  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  //sobre
  ViewSobre: {
    width: "70%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  textSobre: {
    fontSize: 15,
    fontFamily: "LoraItalic",
    textAlign: "center",
    width: 290,
  },
  textSobre2: {
    fontSize: 15,
    fontFamily: "FjallaOne",
    textAlign: "center",
    width: 290,
  },

  //contato
  Contato: {
    borderColor: "#e1dcc9",
    borderRadius: 20,
    backgroundColor: "#e1dcc9",
    width: 350,
    height: 500,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 130,
  },
  textos: {
    marginTop: 90,
    width: 300,
    justifyContent: "flex-start",
    textAlign: "justify",
    textAlign: "center",
  },
  botao: {
    backgroundColor: "#c24229",
    width: 100,
    borderRadius: 5,
    height: 25,
    marginTop: 10,
  },
  btnModal: {
    backgroundColor: "#c24229",
    width: 120,
    borderRadius: 5,
    height: 30,
    marginTop: 15,
  },
  modal: {
    borderColor: "#e1dcc9",
    borderRadius: 20,
    backgroundColor: "#e1dcc9",
    width: 410,
    height: 1150,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  //produtos
  produtosTxt: {
    marginTop: 150,
    width: 300,
    justifyContent: "flex-start",
    textAlign: "justify",
    textAlign: "center",
  },
  //carrinho
  carrinho: {
    borderColor: "#e1dcc9",
    borderRadius: 20,
    backgroundColor: "#e1dcc9",
    width: 410,
    height: 1000,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  carrinhoView: {
    borderRadius: 20,
    width: "100%",
    height: 250,
    justifyContent: "center",
  },

  imageProductCarrinho: {
    height: 220,
    width: 180,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  containerTres: {
    backgroundColor: "#e1dcc9",
    flex: 1,
    justifyContent: "flex-start",
  },
});
