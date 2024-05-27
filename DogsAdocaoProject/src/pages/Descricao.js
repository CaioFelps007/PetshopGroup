import { View, SafeAreaView, Text, Animated } from "react-native";
import { styles } from "../styles/StyleSheet";
import Botao from "../components/ButtonComponents";
import Textos from "../components/TextComponents";

export default function Descricao() {
  return (
    <SafeAreaView>
      <Animated.View style={styles.descriptions}>
        <Textos
          title={
            "Nossa equipe e nossos dogs, ficamos contentes em saber que você esta gostando!"
          }
        />

        <Animated.View style={styles.subViewDescription}></Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}
