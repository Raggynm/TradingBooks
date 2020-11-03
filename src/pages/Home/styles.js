import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    },

    field: {
        flexDirection: 'row',
        backgroundColor: '#D11749',
        paddingHorizontal: 35,
        borderRadius: 10,
        margin: 40,
        marginTop: 40,
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        width: 350,
        height: 70,
        zIndex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

    searchIcon: {
        marginTop: 27,
        marginRight: 8,
    },

    input: {
        alignSelf: 'center',
        fontFamily: 'RedHatDisplay_400Regular',
        color: '#fff',
        fontSize: 16,
        margin: 20
    },

    title: {
        fontSize: 24,
        paddingHorizontal: 20,
        fontFamily: 'RedHatDisplay_400Regular',
        color: '#D11749'
    },

    border: {
        height: 180,
        width: 120,
        marginLeft: 20,
        borderWidth: 0.5,
        borderRadius: 30,
        borderColor: '#dddd'
    },
})

export default styles;