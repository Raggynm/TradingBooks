import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    createButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#D11749',
        position: 'absolute',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        bottom: 10,
        right: 30,
    },
})

export default styles