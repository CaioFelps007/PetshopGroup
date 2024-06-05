import { View, SafeAreaView, Text } from "react-native";
import { styles } from "../styles/StyleSheet";
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function HeaderCarrinho() {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 300,
          width: 430,
          backgroundColor: "#17395C",
          borderBottomLeftRadius: 100,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "TitanOne",
            fontSize: 35,
            marginLeft: 30,
            color: "white",
            marginTop: 40
          }}
        >
          Seu Carrinho!
        </Text>
        <Text
          style={{
            fontFamily: "TitanOne",
            fontSize: 22,
            marginLeft: 40,
            color: "white",
            marginTop: 20
          }}
        >
          Veja sua lista
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 50 }}>

        </View>

      </View>

      <View style={{ alignItems: "flex-end" }}>
        <View
          style={{
            height: 60,
            width: 210,
            backgroundColor: "#17395C",
            borderBottomLeftRadius: 100,
          }}
        >
          <View
            style={{
              height: 60,
              width: 210,
              backgroundColor: "white",

              borderTopRightRadius: 100,
            }}
          ></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
