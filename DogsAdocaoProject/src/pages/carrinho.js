import { styles } from "../styles/StyleSheet";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Carrinho() {
  return (
    <View styles={styles.carrinho}>
      <TouchableOpacity
        style={{
          borderWidth: 2,
          width: 200,
          height: 40,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>BOTAO</Text>
      </TouchableOpacity>
    </View>
  );
}
