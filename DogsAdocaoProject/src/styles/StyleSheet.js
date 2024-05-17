import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // TELA INICIAL
    boasVindas: {
        width: '100%',
        paddingLeft: 40,

    },

    tituloWelcome: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    tituloName: {
        fontSize: 30,
        fontWeight: 'bold'
    },

    subtitulo: {
        fontSize: 17,
    },

    ViewImage: {
        width: '100%',
        height: 350,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 10
    },

    imagemInicial: {
        width: 300,
        height: 300,
        borderRadius: 150,
    },

    ButtonsInicio: {
        width: '100%',
        height: 350,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonInicial: {
        borderRadius: 7,
        backgroundColor: '#17395C',
        width: 325,
        height: 45,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 5 },
        shadowColor: 'blue',
        shadowRadius: 10,
        shadowOpacity: 0.5,
        elevation: 5
    },
    conteudobotao: {
        color: 'white',
        fontSize: 17
    },
})
