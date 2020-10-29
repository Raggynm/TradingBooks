import React from 'react';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({

    title: {
        fontSize: 24,
        paddingHorizontal: 20,
        fontFamily: 'RedHatDisplay_400Regular',
        color: '#D11749'
    },
    
    img: {
        flex: 1, 
        width: null, 
        height: null, 
        resizeMode: 'cover',
        backgroundColor: '#fff',
        borderRadius: 19,
    },

    border: {
        height: 180,
        width: 120,
        marginLeft: 20,
        marginBottom:30,
        borderWidth: 0.5,
        borderRadius: 20,
        borderColor: '#dddd', 
        backgroundColor: '#D11749',
    },

    texTitle: {
        fontSize: 20,
        color:'#fff',
        paddingHorizontal: 10,
        marginTop:5,
    },

    textPrince: {
        color:'#fff',
        paddingHorizontal: 10,
    }

})

export default Styles