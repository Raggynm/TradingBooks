import React from 'react';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    
    
    container: {
        flex: 1,
        backgroundColor: '#D11749',
        alignItems:'center'
    },

    logo: {
        fontFamily:'RedHatDisplay_400Regular',
        fontSize: 72,
        marginTop: 80,
        marginBottom:48,
        color: '#fff'
    },

    line: {
        marginBottom:123,
        paddingLeft:300,
        borderBottomColor: '#fff',
        borderBottomWidth: 3,
    },
    
    button:{
        marginBottom:62,
        height: 104,
        width:'80%',
        backgroundColor:'#EEEEEE',
        borderRadius: 72,
        alignItems: 'center',
        justifyContent: 'center',

    },

    buttonText: {
        fontFamily:'RedHatDisplay_500Medium',
        fontSize: 36,
    },

    line2: {
        marginTop:144,
        marginBottom:60,
        paddingLeft:500,
        borderBottomColor: '#fff',
        borderBottomWidth: 3,
    },

});

export default Styles;