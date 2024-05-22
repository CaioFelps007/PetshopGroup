import { SafeAreaView, View, Text, TextInput, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/StyleSheet";
import Botao from "../components/ButtonComponents";

import { useFonts } from "expo-font";

import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Cadastro() {
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <SafeAreaView>
            <ImageBackground source={require("../assets/images/fundoCadastro.png")} style={styles.fundoCadastro

            }>
                <View style={{ width: '100%', height: 30, alignItems: 'flex-start', justifyContent: 'center', marginBottom: 10 }}>
                    <TouchableOpacity style={styles.ButtonVoltar} onPress={() => navigation.navigate("Inicio")}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.formularioCadastro}>
                    <Text style={{ fontSize: 22, color: '#17395C', fontFamily: 'TitanOne' }}>Cadastro</Text>
                    <TextInput
                        placeholder="Usuário"
                        style={styles.caixatextoLogin} />
                    <TextInput
                        placeholder="Email"
                        style={styles.caixatextoLogin} />
                    <TextInput
                        placeholder="Crie uma senha"
                        style={styles.caixatextoLogin}
                        keyboardType="numeric"
                        secureTextEntry />

                    <View style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                        <Botao estilos={styles.ButtonLogin} TxtBtn={'Cadastrar'} txtestilos={{ fontFamily: 'TitanOne', color: 'white', fontSize: 18 }} onpresstxt={() => navigation.navigate('Login')} />
                        <Text style={{ marginTop: 10 }}>Já possui uma conta?</Text>
                        <Botao TxtBtn={'Faça Login'} estilos={{ marginTop: 10 }} txtestilos={{ color: '#17395C', fontSize: 15, fontWeight: 'bold' }} onpresstxt={() => navigation.navigate('Login')} />
                    </View>

                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}