import React from 'react';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#D11749',
        alignItems: 'center',


    },
    
    login: {
        fontFamily: 'RedHatDisplay_400Regular',
        fontSize: 36,
        marginTop:150,
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

    field: {
        alignItems: 'center',
        marginTop: 30,
    },

    TitleField: {
        color: '#D11749',
        marginTop: -60,
        marginBottom:40,
        marginRight:200,

    },


    input: {
        backgroundColor: '#811331',
        padding: 20,
        width: 300,
        borderRadius: 10,
    },

    remenber: {
        color: '#fff',
        marginTop: 20,
        marginLeft: 150,
        marginBottom: 60,
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