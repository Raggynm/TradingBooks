import React from 'react';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({


    header: {
        flex: 1,
        alignItems:'center',
    },
    productImg:{
        marginTop: 80,
        width: 260, 
        height: 260, 
        resizeMode: 'cover' ,
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
        paddingLeft:22,
    },

    perfilImg: {
        width: 120, 
        height: 120, 
        resizeMode: 'cover' ,
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
        flexDirection:'row',
        marginLeft:135,
        marginTop: -40,
        marginBottom: 30,
        paddingHorizontal:10,
        borderWidth: 0.5, 
        borderRadius: 50,
        borderColor:'#fff',

    },

    whatsapp: {
        marginLeft:10,
        marginTop: 10,

    },

});

export default Styles;