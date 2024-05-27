// import React, { useState, useEffect, useRef } from "react";
// import {
//     StyleSheet,
//     Text,
//     View,
//     Animated,
//     TouchableOpacity,
//     Dimensions,
//     FlatList,
// } from "react-native";

// import { AntDesign } from "@expo/vector-icons";
// const screenWidth = Dimensions.get("window").width;
// const largFinal = screenWidth * 0.7;

// const AnimatedItem = ({ item }) => {
//     const [mostrar, setMostrar] = useState(false);
//     const [mostrarTouch, setMostrarTouch] = useState(false);
//     const largInicial = useRef(new Animated.Value(screenWidth * 0.9)).current;

//     useEffect(() => {
//         Animated.timing(largInicial, {
//             toValue: mostrar ? largFinal : screenWidth * 0.9,
//             duration: 4000,
//             useNativeDriver: false,
//         }).start();
//     }, [mostrar, largInicial]);

//     const dispararAnimation = () => {
//         setMostrar(!mostrar);
//         setMostrarTouch(true);
//     };

//     return (
//         <View style={styles.box}>
//             <TouchableOpacity onPress={() => dispararAnimation()}>
//                 <Animated.View
//                     style={{
//                         width: largInicial,
//                         height: "100%",
//                         backgroundColor: "#FFFFFF",
//                         borderRadius: 20,
//                         alignItems: "center",
//                         justifyContent: "center",
//                     }}
//                 >
//                     <Text style={{ color: "#000", textAlign: "center" }}>
//                         {item.title}
//                     </Text>
//                 </Animated.View>
//             </TouchableOpacity>
//             {mostrarTouch && (
//                 <>
//                     <View style={{ flex: 1, backgroundColor: "#CD853F" }}>
//                         <TouchableOpacity
//                             style={[
//                                 styles.iconContainer,
//                                 {
//                                     backgroundColor: "#A0522D",
//                                     borderTopRightRadius: 20,
//                                     borderBottomRightRadius: 20,
//                                 },
//                             ]}
//                             onPress={() => console.log("HELLO")}
//                         >
//                             <AntDesign name="hearto" size={28} color="white" />
//                         </TouchableOpacity>
//                     </View>

//                     <TouchableOpacity
//                         style={[
//                             styles.iconContainer,
//                             {
//                                 backgroundColor: "#CD853F",
//                                 borderTopRightRadius: 20,
//                                 borderBottomRightRadius: 20,
//                             },
//                         ]}
//                         onPress={() => console.log("BYE")}
//                     >
//                         <AntDesign name="shoppingcart" size={28} color="white" />
//                     </TouchableOpacity>
//                 </>
//             )}
//         </View>
//     );
// };

// export default function ProjetoCaio() {
//     const data = [
//         { id: "1", title: "Animado TouchableOpacity 1" },
//         { id: "2", title: "Animado TouchableOpacity 2" },
//     ];

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={data}
//                 renderItem={({ item }) => <AnimatedItem item={item} />}
//                 keyExtractor={(item) => item.id}
//                 contentContainerStyle={styles.flatListContent}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },

//     flatListContent: {
//         justifyContent: "center",
//         flexGrow: 1,
//         alignItems: "center",
//     },

//     box: {
//         height: 100,
//         width: screenWidth * 0.9,
//         flexDirection: "row",
//         marginBottom: 10,
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 6,
//         },
//         shadowOpacity: 0.7,
//         shadowRadius: 8.3,
//         elevation: 13,
//         borderRadius: 20,
//         backgroundColor: "#A0522D",
//     },

//     iconContainer: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });

// // <Animated.View
// // style={{
// //   width: "100%",
// //   height: altura,
// //   justifyContent: "flex-start",
// //   alignItems: "center",
// //   marginBottom: 20,
// // }}
// // >
// // <Animated.Image
// //   source={require("../assets/images/dogrunner2d.png")}
// //   style={{
// //     height: alturaImg,
// //     width: 230,
// //   }}
// // />
// // <Text
// //   style={{
// //     color: "#EFB758",
// //     textAlign: "center",
// //     fontSize: 23,
// //     fontFamily: "TitanOne",
// //     marginTop: 25,
// //   }}
// // >
// //   Olá Aumigo, Seja bem Vindo!
// // </Text>
// // </Animated.View>

// // <Animated.View style={[styles.paginaHome, { height: alturaDois }]}>
// // <Text style={[styles.TextoHome, { fontFamily: "TitanOne" }]}>
// //   O melhor aplicativo de pet para você !
// // </Text>

// // <Image source={require('../assets/images/patasFundo.png')} style={{ width: 60, height: 60, position: 'relative', right: -160 }} />

// // <Textos
// //   title={"Conheça mais sobre nós:"}
// //   estilotexto={[
// //     styles.TextoHome,
// //     {
// //       fontSize: 18,
// //       fontFamily: "TitanOne",
// //       marginTop: 10,
// //       left: -55,
// //     },
// //   ]}
// // />

// // <View
// //   style={{
// //     height: 80,
// //     width: "100%",
// //     marginTop: 20,
// //     flexDirection: "row",
// //     alignItems: "flex-start",
// //     justifyContent: "center",
// //   }}
// // >
// //   <Botao
// //     TxtBtn={"Nossa equipe"}
// //     estilos={styles.btnHome}
// //     txtestilos={{
// //       fontSize: 16,
// //       fontFamily: "TitanOne",
// //       color: "#17395C",
// //     }}
// //     onpresstxt={() => navigation.navigate("Sobre")}
// //   />
// //   <Botao
// //     TxtBtn={"Contato"}
// //     estilos={[styles.btnHome, { marginLeft: 20 }]}
// //     txtestilos={{
// //       fontSize: 16,
// //       fontFamily: "TitanOne",
// //       color: "#17395C",
// //     }}
// //     onpresstxt={() => navigation.navigate("Contato")}
// //   />

// // </View>
// // <TouchableOpacity onPress={() => scrollTosection(750)} style={styles.ButtonDescer}>
// //   <AntDesign name="arrowdown" size={30} color="white" />
// // </TouchableOpacity>
// // <View>
// //   <View style={{
// //     height: 170,
// //     width: "100%",
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginTop: 80,
// //     borderTopWidth: 1,
// //     borderBottomWidth: 1,
// //     borderColor: '#17395C'
// //   }}>

// //     <Animated.Image
// //       source={require("../assets/images/cachorroToys.png")}
// //       style={{ height: 150, width: larguraImgDois }}
// //     />
// //     <View>
// //       <Textos title={"Conheça nossos Pets "} estilotexto={{ fontFamily: 'TitanOne', fontSize: 17, color: '#17395C' }} />

// //       <Textos title={"AMIGOS!"} estilotexto={{ fontFamily: 'TitanOne', textAlign: 'center', fontSize: 25, color: '#17395C', marginTop: 5 }} />
// //     </View>

// //   </View>

// //   <View style={{ alignItems: 'center', justifyContent: 'center', height: 150 }}>
// //     <Botao TxtBtn={'CONHECER PETS!'} txtestilos={{ fontFamily: 'TitanOne', color: '#17395C', fontSize: 23, alignItems: 'center' }} estilos={styles.btnHomePets} />
// //   </View>

// //   <View style={{
// //     height: 170,
// //     width: "100%",
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginTop: 40,
// //     borderTopWidth: 1,
// //     borderBottomWidth: 1,
// //     borderColor: '#EFB758'
// //   }}>

// //     <View>
// //       <Textos title={"Visite nossa pagina "} estilotexto={{ fontFamily: 'TitanOne', fontSize: 17, color: '#EFB758' }} />

// //       <Textos title={"produtos!"} estilotexto={{ fontFamily: 'TitanOne', textAlign: 'center', fontSize: 25, color: '#EFB758', marginTop: 5 }} />
// //     </View>

// //     <View>
// //       <Animated.Image
// //         source={require("../assets/images/dogrunner2d.png")}
// //         style={{ height: 200, width: larguraImg }}
// //       />

// //     </View>

// //   </View>

// // </View>

// // </Animated.View>
