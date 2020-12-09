import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'
import styles from './styles';

const SelectItem = (props) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [bookId, setBookId] = useState(props.bookId)
    const [type, setType] = useState(props.type)
    const [announceId, setAnnounceId] = useState(props.announceId)

    const { navigate } = useNavigation()

    const handlePress = () => {
        if(type === "proposal")
        navigate('MakeProposal',
        {
            book: {
                announceId,
                bookId,
                title: props.title
            }
        })
        else
        navigate('CreateAnnounce', {
            book: {
                bookId: props.bookId,
                title: props.title
            }

        })
    }

    return (

        <View style={{
            flex: 1, flexDirection: "row", justifyContent: "flex-start", width: 350, margin: 5,
            backgroundColor: "#fff", alignItems: 'center', borderRadius: 30
        }}>
            <TouchableOpacity onPress={handlePress} style={{ width: 400, height: 50, justifyContent: "center" }}>
                <Text style={{
                    fontFamily: 'RedHatDisplay_400Regular',
                    fontSize: 20,
                    marginLeft: 20,
                    color: '#000'
                }}>{props.title}</Text>
            </TouchableOpacity>

        </View>

    )
}


export default SelectItem