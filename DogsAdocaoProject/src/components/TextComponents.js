import { Text } from "react-native";

export default function Textos({ title, estilotexto }) {
    return (
        <Text style={estilotexto}>{title}</Text>
    )
}