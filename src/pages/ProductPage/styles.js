import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export const Styles = StyleSheet.create({


    header: {
        alignItems:'center',
        justifyContent: "center",
        position: "absolute",
        zIndex: -1,
        top: 0,
        right: 0,
        left: 0
    },
    productImg:{
        marginTop: 80,
        alignSelf: "center",
        width: Math.round(Dimensions.get('window').width), 
        height: Math.round(Dimensions.get('window').width)
    },
 
    body: {
        flex: 1,
        backgroundColor: '#D11749',
        alignItems:'center',
        marginTop: 30,
        borderTopEndRadius: 100,
        borderTopLeftRadius: 100,
        borderColor:'#D11749',

    },
    productTitle: {
        fontFamily: 'RedHatDisplay_500Medium',
        fontSize: 30,
        marginTop: 30,
        marginBottom: 10,
        color: '#FFF',  
    },
    productSubTitle: {
        fontFamily: 'RedHatDisplay_400Regular',
        fontSize: 20,
        marginBottom: 20,
        color: '#FFF',

    },

    line: {
        marginBottom: 20,
        paddingLeft: 300,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
    },

    description: {
        fontFamily: 'RedHatDisplay_500Medium',
        fontSize: 15,
        marginBottom: 10,
        paddingHorizontal:45,
        color: '#eee',
    },

    footer: {
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor: '#D11749',
    },

    perfilImg: {
        width: 120, 
        height: 120, 
        resizeMode: 'cover' ,
    },

    transactionContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    storeTitle: {
        marginTop:30,
        marginLeft:15,
        fontFamily: 'RedHatDisplay_400Regular',
        paddingLeft:20,
        fontSize: 20,
        color: '#FFF'

    },

    contactTitle: {
        fontFamily: 'RedHatDisplay_400Regular',
        padding:5,
        fontSize: 20,
        color: '#FFF'

    },

    contactButton: {
        marginHorizontal: 20,
        marginBottom: 10,
        paddingHorizontal:10,
        borderWidth: 1.5, 
        borderRadius: 50,
        borderColor:'#fff',

    },

    whatsapp: {
        marginLeft:10,
        marginTop: 10,

    },

});

export default Styles;