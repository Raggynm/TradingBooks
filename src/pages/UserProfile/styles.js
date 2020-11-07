import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({


    header: {
        flex: 1,
        backgroundColor: '#D11749',
        alignItems:'center',
    },
    perfilImg:{
        marginTop: 80,
        width: 260, 
        height: 260,
        borderRadius: 150,
        resizeMode: 'cover' ,
    },

    marketTitle: {
        fontFamily: 'RedHatDisplay_500Medium',
        fontSize: 30,
        marginTop: 50,
        marginBottom: 20,
        color: '#fff',
    },
    
    description: {
        fontFamily: 'RedHatDisplay_500Medium',
        fontSize: 15,
        marginBottom: 10,
        paddingHorizontal:45,
        color: '#eee',
    },

    infoContainer: {
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    infoItem: {
        alignItems: "center",
        margin: 10,
    },

    infoText: {
        fontFamily: 'RedHatDisplay_500Medium',
        fontSize: 15,
    },

    buttonInfo: {
        flex: 1,
       
        flexDirection: "row",
        backgroundColor: "#f0f0f0",
    },

    buttonInfoView: {
    },

    info: {
        fontFamily: 'RedHatDisplay_500Medium',
        fontSize: 20,
    },
    
    profileContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: "center",
        marginTop: 30,
        borderWidth: 0.5, 
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        borderColor:'#dddd',

    },
    productTitle: {
        fontFamily: 'RedHatDisplay_500Medium',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 20,
        color: '#D11749',  
    },

    productAlign: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: 'row',
        flexWrap:'wrap',
        marginLeft: 50
    },



});

export default styles;