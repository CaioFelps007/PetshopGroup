import { styles } from "../styles/Stylesheet";
import { Text, View, Image, ImageBackground, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { useState } from "react";
import BotaoImage from "../assets/components/ButtonImage";
import { useNavigation } from "@react-navigation/native";


export default function Produtos() {
    const produtos = [
        { id: "1", urlImg: require("../assets/images/cachorroToys.png"), nameDog: "Scooby", sexoDog: "Macho" },
        { id: "2", urlImg: require("../assets/images/dogPng.png"), nameDog: "Alexandre", sexoDog: "Feminino" },


    ];
    const navigation = useNavigation();
    const scrollViewPr = (section) => {
        if (scrollViewPr.current) {
            scrollViewPr.current.scrollViewPr({
                y: section,
                animated: true,
            })
        }
    };

    <SafeAreaView style={styles.containerDois}>
        <ScrollView ref={scrollViewPr}>

            <View style={styles.containerDois}>



            </View>


        </ScrollView>

    </SafeAreaView>

}

