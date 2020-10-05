import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#EEE',
        alignItems: 'center'
    },

    field: {
        flexDirection:'row',
        backgroundColor: '#D11749',
        paddingVertical: 30,
        paddingHorizontal:50,
    },

    searchIcon: {
        marginTop:35,
        marginRight:10,
    },

    input: {
        alignSelf: 'center',
        fontFamily: 'RedHatDisplay_400Regular',
        color:'#fff',
        fontSize: 16,
        marginTop:30,
    },

    title :{
        fontSize: 24,
        paddingHorizontal:20,
        fontFamily: 'RedHatDisplay_400Regular',
        color: '#D11749'
    },

    border :{
        height:180, 
        width:120, 
        marginLeft:20, 
        borderWidth: 0.5, 
        borderRadius: 30, 
        borderColor:'#dddd'
    },
})

export default styles;