import React, { useState, Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NetworkGraph from 'react-native-network-graph';
import styles from './styles';

function GraphVis(){

 
  function onCircleClick(index) {  //or an action can be dispatched as well.
    console.log(index)
  }
 
  
    let connections = {
      "1":[2,4], //node at index 1 is connected to nodes at index 2 and 4 respectively.
      "2":[6,7] //node at index 2 is connected to nodes at index 6 and 7 respectively.
    };
    let circleTitles = ['Grhamm','C2', 'C3', 'C4', 'C5','C6', 'C7', 'C8', 'C9'];
    return (
      <View style={styles.container}>
        <NetworkGraph
          selectedCircleIndex={0} //so that clicks on the circles reflect results in real time.
          circleTitles={circleTitles}
          connections={connections}
          containerHeight={700}
          containerWidth={500}
          centralCircleRadius={30}
          otherCircleLinesColor="black"
          otherCirclesRadius={20}
          distanceFromCenter={150}
          centralCircleTextColor="black"
          onCircleClick={index => onCircleClick(index)}/>
      </View>
    );
  
}

export default GraphVis;