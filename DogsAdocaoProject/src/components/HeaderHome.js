import { View, SafeAreaView, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

import Botao from "./ButtonComponents";
import Textos from "./TextComponents";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

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
          estilos={styles.btnsHomePage}
          txtestilos={{ fontFamily: "TitanOne" }}
        />
      </View>
    </SafeAreaView>
  );
}
