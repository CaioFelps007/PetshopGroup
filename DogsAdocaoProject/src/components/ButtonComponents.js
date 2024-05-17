
import { Text, TouchableOpacity } from "react-native";

export default function Botao({
    txtestilos,
    estilos,
    onpresstxt,
    TxtBtn,
}) {
    return (
        <TouchableOpacity style={estilos} onPress={onpresstxt}>
            <Text style={txtestilos}>
                {TxtBtn}
            </Text>
        </TouchableOpacity>
    );
}