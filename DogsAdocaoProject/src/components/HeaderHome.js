import { View, SafeAreaView } from "react-native";
import { styles } from "../styles/StyleSheet";

import Botao from "./ButtonComponents";
import Textos from "./TextComponents";

export default function HeaderHome() {
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
          estilos={styles.btnsHomePage}
          txtestilos={{ fontFamily: "TitanOne" }}
        />
        <Botao
          TxtBtn={"Brinquedos"}
          estilos={styles.btnsHomePage}
          txtestilos={{ fontFamily: "TitanOne" }}
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
