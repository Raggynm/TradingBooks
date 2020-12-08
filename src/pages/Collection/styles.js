import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

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

    productAlign: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 50
    },

    title: {
        fontFamily: 'RedHatDisplay_400Regular',
        fontSize: 36,
        color: '#000'
    },

    titleView: {
        paddingTop: 50,
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default styles