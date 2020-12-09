import React, { useState, Component, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Picker } from 'react-native';
import NetworkGraph from 'react-native-network-graph';
import styles from './styles';
import ApiService from '../../services/ApiService';
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';
import { useNavigation } from '@react-navigation/native';
import { set } from 'react-native-reanimated';


const GraphVis = ({ route, navigation }) => {

  const PickerItem = Picker.Item;

  const { navigate } = useNavigation()

  const [selectedAnnounce, setSelectedAnnounce] = useState(0)
  const [titleSelected, setTitleSelected] = useState("")
  const [type, setType] = useState("received")
  const [announces, setAnnounces] = useState([])
  const [proposals, setProposals] = useState([])
  

  function onCircleClick(index) {  //or an action can be dispatched as well.
    console.log(proposals[index-1].proposalId)
    navigate('Proposal', {
      proposal: proposals[index-1]
    })
  }

  const [connections, setConnections] = useState({})

  const [circleTitles, setCirclesTitles] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      ApiService.StoreFindByUser()
        .then((res) => {
          if (res.data.announces != null) {
            setAnnounces([])
            setAnnounces(res.data.announces)
            console.log(res.data.announces)
          }

        })

    })
    return unsubscribe
  }, [navigation])

  const handleCircleTitle = (arrayAux) => {
    let array = [""]
    let connArray = []

    let n = 1

    for (var i of arrayAux){
      array.push(i.title)
      connArray.push(n)
      n++
    }
    console.log(array)
    setConnections({})

    setConnections({
      "0": [...connArray]
    })
    return array
  }

  useEffect(() => {
    ApiService.ShowProposals(selectedAnnounce)
    .then(res => {
      setProposals([])
      setProposals(res.data)
      let auxArray = handleCircleTitle(res.data)
      console.log(res.data)
      setCirclesTitles(auxArray)

    })
    .catch(e => {
      setProposals([])
      setCirclesTitles([])
      setConnections({})
      console.log(e)}
      )
  }, [selectedAnnounce])


  
  return (
    <View style={styles.container}>
      <View>
        {/* <Picker
          selectedValue={type}
          style={{ height: 50, width: 300, marginTop: 50, color: "#000" }}
          mode="dialog"
          onValueChange={(itemValue) =>
            setType(itemValue)
          }>
          <Picker.Item label="Recebidas" value="received" />
          <Picker.Item label="Enviadas" value="sended" />
        </Picker> */}
      </View>

      {
        type === "received" ?
          <>
            <View>
              <Picker
                selectedValue={selectedAnnounce}
                style={{ height: 50, width: 300, marginTop:50, color: "#000" }}
                mode="dialog"
                onValueChange={(itemValue) =>{
                  setSelectedAnnounce(itemValue)
                }}>

                {announces.map(
                  (item, key) => {
                    return <PickerItem
                      key={key}
                      value={item.announceId}
                      label={item.title}
                    />
                  }
                )}

              </Picker>

            </View>
            <NetworkGraph

              selectedCircleIndex={0} //so that clicks on the circles reflect results in real time.
              circleTitles={circleTitles}
              connections={connections}
              containerHeight={600}
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
          </>
          :
          <></>
      }

    </View>

  );

}

export default GraphVis;