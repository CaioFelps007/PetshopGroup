import { View, SafeAreaView, Text, Animated } from "react-native";
import { styles } from "../styles/StyleSheet";
import Botao from "../components/ButtonComponents";
import Textos from "../components/TextComponents";
import { Image } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';


export default function Descricao({ route }) {

  const navigation = useNavigation();

  const { item } = route.params;

  // alert(item.id)

  const [fontsLoaded] = useFonts({
    TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    Lora: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf"),
    FjallaOne: require("../assets/fonts/FjallaOne-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  };

  return (
    <View>
      <View style={{ backgroundColor: "#17395c", width: "100%", height: 420, }}>
        <Image source={item.urlImg} style={{ width: "100%", height: 400 }} />



        <SafeAreaView style={{ width: "100%", height: 400, backgroundColor: "white", borderRadius: 28 }}>


          <View style={{ alignItems: "center", justifyContent: "space-between" }}>


            <Text style={{ fontFamily: "TitanOne", textAlign: "flex-end", fontSize: 28, }}>{item.nameDog}</Text>




            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', gap: 10 }}>
              <View style={{
                shadowOffset: { width: 0, height: 5 },
                shadowColor: "black",
                shadowRadius: 100,
                shadowOpacity: 0.5,
                elevation: 5,
                backgroundColor: 'white',
                width: 40,
                height: 40,
                borderRadius: 200,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <MaterialIcons name="pets" size={24} color="black" />
              </View>

              <Text style={{ fontFamily: "TitanOne" }}>{item.Raca}</Text>
            </View>
          </View>

          <Text style={{ fontFamily: "Lora", textAlign: "center", fontSize: 20, width: "100%", marginTop: 20 }}>{item.Descricao}</Text>



          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Contato")} style={{ backgroundColor: "#e1dcc9", width: "50%", borderRadius: 10, alignItems: "center", marginTop: 30 }} >
              <Text style={{ fontSize: 25, fontFamily: "TitanOne", textAlign: "center", }}>Quero Adotar</Text>
            </TouchableOpacity>
          </View>


        </SafeAreaView>
      </View>
    </View>
  );
}
