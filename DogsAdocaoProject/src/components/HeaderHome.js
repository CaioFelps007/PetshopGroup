import { View, SafeAreaView, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

import Botao from "./ButtonComponents";
import Textos from "./TextComponents";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import { FontAwesome } from "@expo/vector-icons";

export default function HeaderHome() {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
    setActiveButton(screenName);
  };

  return (
    <SafeAreaView>
      <View style={styles.HeaderUser}>
        <FontAwesome name="user-circle-o" size={47} color={"black"} />
        <Textos
          title={"Olá Usuario"}
          estilotexto={[styles.hduser, { fontFamily: "TitanOne" }]}
        />
      </View>

      <View
        style={{
          height: 50,
          width: "100%",
          justifyContent: "center",
          alignItems: "baseline",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <Botao
          TxtBtn={"Dogs"}
          estilos={[styles.btnsHomePage, activeButton === "Home"]}
          txtestilos={[
            activeButton === "Home" && styles.activeButtonText,
            { fontFamily: "TitanOne" },
          ]}
          onpresstxt={() => handleButtonPress("Home")}
        />
        <Botao
          TxtBtn={"Brinquedos"}
          estilos={[styles.btnsHomePage, activeButton === "Brinquedos"]}
          txtestilos={[
            activeButton === "Brinquedos" && styles.activeButtonText,
            { fontFamily: "TitanOne" },
          ]}
          onpresstxt={() => handleButtonPress("Brinquedos")}
        />

        <Botao
          TxtBtn={"Rações"}
          estilos={[styles.btnsHomePage, activeButton === "Rações"]}
          txtestilos={[
            activeButton === "Rações" && styles.activeButtonText,
            { fontFamily: "TitanOne" },
          ]}
          onpresstxt={() => handleButtonPress("Rações")}
        />
      </View>
    </SafeAreaView>
  );
}
