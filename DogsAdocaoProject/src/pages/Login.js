import { SafeAreaView, View, Text, TextInput, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/StyleSheet";

import Textos from "../components/TextComponents";

import { useFonts } from "expo-font";

import Botao from "../components/ButtonComponents";

import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from "react-native-gesture-handler";



export default function Loggedin() {

    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return undefined;
    }


    return (
        <SafeAreaView>
            <ImageBackground source={require('../assets/images/fundoLogin.png')} style={styles.fundoLogin}>

                <View style={{ width: '100%', height: 30, alignItems: 'flex-start', justifyContent: 'center', marginBottom: 10 }}>
                    <TouchableOpacity style={styles.ButtonVoltar} onPress={() => navigation.navigate("Inicio")}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                </View>


                <Textos title={'Welcome'} estilotexto={{ color: '#17395C', fontSize: 50, fontFamily: 'TitanOne', marginRight: 90 }} />
                <Textos title={'Back !'} estilotexto={{ color: '#17395C', fontFamily: 'TitanOne', fontSize: 32, marginRight: 190, marginBottom: 40, marginTop: 10 }} />


                <View style={styles.formularioLogin}>
                    <Textos title={'Login'} estilotexto={{ fontSize: 25, color: '#17395C', fontWeight: 'bold', marginLeft: 10, }} />
                    <TextInput
                        style={styles.caixatextoLogin}
                        placeholder="Email "

                    />

                    <TextInput
                        style={styles.caixatextoLogin}
                        placeholder="Password "
                        secureTextEntry
                    />

                    <View style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Botao estilos={styles.ButtonLogin} TxtBtn={'Login'} txtestilos={{ fontFamily: 'TitanOne', color: 'white', fontSize: 18 }} onpresstxt={() => navigation.navigate("Home")} />
                        <Botao TxtBtn={'Crie uma conta !'} estilos={{ marginTop: 10 }} txtestilos={{ color: '#17395C', fontSize: 15, fontWeight: 'bold' }} onpresstxt={() => navigation.navigate("Cadastro")} />
                    </View>





                </View>


            </ImageBackground>
        </SafeAreaView>
    )
}