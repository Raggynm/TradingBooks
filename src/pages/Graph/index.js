import React, { useState, Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import NetworkGraph from 'react-native-network-graph';
import styles from './styles';

function GraphVis() {


  function onCircleClick(index) {  //or an action can be dispatched as well.
    console.log(index)
  }


  let connections = {
    "0": [2, 4, 3, 5, 6, 1, 7, 8],
    "1" : [0] //node at index 1 is connected to nodes at index 2 and 4 respectively.
  };
  const [circleTitles, setCirclesTitles] = useState(['Grhamm', 'Gean', 'João', 'Vagner', 'Soussa', 'Hernas', 'Lapa', 'Ana', 'Maria']);
  return (
    <ScrollView>
      <View style={styles.container}>
        <NetworkGraph
        
          selectedCircleIndex={0} //so that clicks on the circles reflect results in real time.
          circleTitles={circleTitles}
          connections={connections}
          containerHeight={700}
          containerWidth={500}
          centralCircleRadius={30}
          otherCircleLinesColor="#811331"
          otherCircleFillColor="#D11749"
          otherCirclesRadius={25}
          distanceFromCenter={150}
          selectedCircleLinesColor="#811331"
          centralCircleStrokeColor="#811331"
          centralCircleFillColor="#D11749"
          centralCircleTextColor="black"
          otherCircleTextColor="black"
          onCircleClick={index => onCircleClick(index)} />
      </View>
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
          onCircleClick={index => onCircleClick(index)} />
      </View>
      
    </ScrollView>
  );

}

export default GraphVis;