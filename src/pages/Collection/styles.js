import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({



productAlign: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: 'row',
    flexWrap:'wrap',
    marginLeft: 50
},

title: {
    fontFamily: 'RedHatDisplay_400Regular',
    fontSize: 36,
    color: '#000'
},

titleView:{
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
}

})

export default styles