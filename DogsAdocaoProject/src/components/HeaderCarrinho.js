import { View, SafeAreaView, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

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
          }}
        >
          Seu Carrinho!
        </Text>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <View
          style={{
            height: 80,
            width: 210,
            backgroundColor: "#17395C",
            borderBottomLeftRadius: 100,
          }}
        >
          <View
            style={{
              height: 90,
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
