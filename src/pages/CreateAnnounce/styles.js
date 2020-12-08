import React from 'react';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    textContainer: {
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        fontFamily: 'RedHatDisplay_400Regular',
        fontSize: 40,
        marginTop: 80,
        marginBottom: 5,
        color: '#fff'
    },

    button: {
        backgroundColor: '#EEEEEE',
        borderRadius: 72,
        padding: 5,
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 1,

        elevation: 5,
    },

    buttonText: {
        fontFamily: 'RedHatDisplay_500Medium',
        fontSize: 20,
    },
});

export default Styles;