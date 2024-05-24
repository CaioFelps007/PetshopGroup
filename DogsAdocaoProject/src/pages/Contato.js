import { SafeAreaView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Textos from "../components/TextComponents";
import { styles } from "../styles/StyleSheet";
import { useState } from "react";
import { Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";

import { useFonts } from "expo-font";

export default function Contato() {
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
        Lora: require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf")
    });

    if (!fontsLoaded) {
        return undefined;
    }
    const [visible, setVisible] = useState(false);

    visModal = (vis) => {
        if (!visible) {
            setVisible(vis);
        } else {
            setVisible(vis);
        }
    };


    return (
        <SafeAreaView>
            <View style={{ width: "100%", justifyContent: "center", alignItems: "center", }}>
                <View style={styles.Contato}>
                    <Textos
                        title={"FALE CONOSCO!"}
                        estilotexto={{ fontSize: 25, marginTop: 30, color: "#17395c", fontFamily: "TitanOne" }}
                    />
                    <View style={styles.textos}>
                        <Text style={{ fontFamily: "Lora", fontSize: 20 }}>WhatsApp: 19 99611-8679</Text>
                        <Text style={{ fontFamily: "Lora", fontSize: 20 }}>E-mail: petLove@gmail.com</Text>
                        <Text style={{ fontFamily: "Lora", fontSize: 20 }}>Endereço: Rua Santo Pasini, 86, Santa Rita 1-Nova Odessa</Text>
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity title="Denúncie" onPress={() => visModal(true)}>
                        </TouchableOpacity>
                        <Modal transparent={false} animationType="fade" visible={visible}>
                            <Text></Text>
                            <TouchableOpacity title=" fechar modal" onPress={() => visModal(false)}></TouchableOpacity>
                        </Modal>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}