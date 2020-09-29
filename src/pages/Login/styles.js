import React from 'react';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#D11749',
        alignItems: 'center',


    },
    
    title: {
        fontFamily: 'RedHatDisplay_400Regular',
        fontSize: 36,
        marginTop:100,
        marginRight:210,
        color: '#fff'
    },

    line: {
        paddingLeft:200,
        marginBottom:45,
        marginRight:90,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        
    },

    remenber: {
        color: '#fff',
        marginTop: 20,
        marginLeft: 150,
        marginBottom: 114,
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

    NewAccountButton: {
        color: '#fff',
        marginTop: 30,
        marginBottom: 60,
    },    
});

export default Styles;