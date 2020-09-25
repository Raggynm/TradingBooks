import React from 'react';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#D11749',
        alignItems: 'center'
    },

    logo: {
        fontFamily: 'RedHatDisplay_400Regular',
        fontSize: 40,
        marginTop: 80,
        marginBottom: 48,
        color: '#fff'
    },

    line: {
        marginBottom: 123,
        paddingLeft: 300,
        borderBottomColor: '#fff',
        borderBottomWidth: 3,
    },

    iconView: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center"
    },

    buttonTextView: {
        width: "70%"
    },

    button: {
        backgroundColor: '#EEEEEE',
        borderRadius: 72,
        flex: 1,
        padding: 5,
        height: 50,
        margin: 10,
        flexDirection: 'row',
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

    containerButtons: {
        height: 250
    },

    buttonText: {
        fontFamily: 'RedHatDisplay_500Medium',
        fontSize: 20,
    },

    line2: {
        marginTop: 144,
        paddingLeft: 300,
        borderBottomColor: '#fff',
        borderBottomWidth: 3,
    },

    buttonWoutBackground: {
        margin: 60
    },

    textButtonb2: {
        fontSize: 16,
        color: "#FFF"
    },

    containerButton: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        height: 20,
        alignItems: "center",
        justifyContent: "center",

    },

    bottomContainer: {
        flex: 1,
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        justifyContent: "space-between"
    }

});

export default Styles;