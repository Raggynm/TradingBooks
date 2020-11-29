import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles';

const UserBookCard = (props) => {

    const [marked, setMarked] = useState(props.marked)

    return (
        <TouchableOpacity onPress={props.select}>
            <View style={styles.border} >
                    <View style={{ flex: 2 }}>
                        <Image
                            source={props.image}
                            style={styles.img} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.texTitle} >{props.title}</Text>
                    </View>
            </View>
        </TouchableOpacity>
    )
}

export default UserBookCard