import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        marginTop: 20,
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
})

export default styles