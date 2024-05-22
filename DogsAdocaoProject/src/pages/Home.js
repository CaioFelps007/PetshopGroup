import {
    View, Text, ImageBackground, SafeAreaView, Image
} from "react-native";
import { styles } from "../styles/StyleSheet";
import Carousel from "react-native-snap-carousel"



export default function Home() {

    const data = [

        {
            imgUrl: require('../assets/images/imgCarrUm.png'),
        },

        {
            imgUrl: require("../assets/images/ImgCarDois.png"),
        },
        {
            imgUrl: require("../assets/images/ImgCarTres.png"),
        },

    ];

    function CarouselCardItem({ item }) {
        return (
            <View style={styles.containerCarousel}>
                <Image
                    source={(item.imgUrl)}
                    style={styles.img}
                />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.containerDois}>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <Carousel
                    data={data}
                    renderItem={CarouselCardItem}
                    sliderWidth={400}
                    itemWidth={400}
                    autoplay={true}
                    autoplayInterval={3000}
                    loop={true}
                    layout={"default"}
                    layoutCardOffset={`9`}
                />

            </View>




            <View>
                <Text>
                    HOME CAIO
                </Text>
            </View>
        </SafeAreaView>
    )
}