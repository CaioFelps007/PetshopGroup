import { Image, View, Text, ImageBackground } from "react-native";
import { styles } from "../styles/StyleSheet";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import { useFonts } from "expo-font";

import Textos from "./TextComponents";
import Botao from "./ButtonComponents";

export default function CustomDrawer({ ...props }) {
    const [fontsLoaded] = useFonts({
        TitanOne: require("../assets/fonts/TitanOne-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return undefined;
    }
    return (
        <DrawerContentScrollView>
            <ImageBackground source={require("../assets/images/FUNDOBEGE.png")} style={{ height: 180, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>

                <Image source={require('../assets/images/logo.png')} style={{ width: 140, height: 140, borderRadius: 100 }} />

                <Text style={{ fontSize: 22, marginBottom: 10, color: '#EFB758', fontFamily: 'TitanOne' }}>Seja Bem Vindo!</Text>
            </ImageBackground>
            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    )
}