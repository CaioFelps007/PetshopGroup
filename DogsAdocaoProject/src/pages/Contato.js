import { SafeAreaView, View, Modal, TouchableOpacity, ScrollView, Text, Image } from "react-native";
import Textos from "../components/TextComponents";
import { styles } from "../styles/StyleSheet";
import React, { useState } from "react";

import { useFonts } from "expo-font";

export default function Contato() {
  const [visible, setVisible] = useState(false);

  const SubirModal = () => {
    setVisible(true)
  };
  const FecharModal = () => {
    setVisible(false)
  };


  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    Lora: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf"),
    FjallaOne: require("../assets/fonts/FjallaOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  };




  return (
    <View style={{ flex: 1 }}>



      <View style={{ flex: 1, backgroundColor: "#17395c", flexDirection: "row" }}>

        <View style={{ height: "100%", width: "50%" }}>
          <Image source={require("../assets/images/cachorrodelado.png")} style={{ position: "relative", bottom: -35, width: 400 }} />
        </View>
        <View style={{ height: "100%", width: "50%", alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 30, color: "white", fontFamily: "TitanOne" }}>C</Text>
          <Text style={{ fontSize: 30, color: "white", fontFamily: "TitanOne" }}>O</Text>
          <Text style={{ fontSize: 30, color: "white", fontFamily: "TitanOne" }}>N</Text>
          <Text style={{ fontSize: 30, color: "white", fontFamily: "TitanOne" }}>T</Text>
          <Text style={{ fontSize: 30, color: "white", fontFamily: "TitanOne" }}>A</Text>
          <Text style={{ fontSize: 30, color: "white", fontFamily: "TitanOne" }}>T</Text>
          <Text style={{ fontSize: 30, color: "white", fontFamily: "TitanOne" }}>O</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", padding: 30 }}>
        <Text style={{ fontFamily: "TitanOne", fontSize: 20 }}>
          WhatsApp:
        </Text>
        <Text style={{ fontFamily: "FjallaOne", fontSize: 20 }}>
          (19) 97979-7979

        </Text>
        <Text style={{ fontFamily: "TitanOne", fontSize: 20 }}>
          E-mail:
        </Text>

        <Text style={{ fontFamily: "FjallaOne", fontSize: 20 }}>
          petLove@gmail.com
        </Text>

        <Text style={{ fontFamily: "TitanOne", fontSize: 20 }}>
          Endereço:
        </Text>

        <Text style={{ fontFamily: "FjallaOne", fontSize: 20 }}>
          R. dos Jacarandás, 100 - Jardim das Palmeiras, Nova Odessa - SP, 13460-000
        </Text>
      </View>


    </View >


  )
}