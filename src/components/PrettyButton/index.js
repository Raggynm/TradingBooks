import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

const PrettyButton = (props) => {

return (
    <TouchableOpacity
        onPress={props.onPress}
        style={styles.button}>
        <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
)
}

export default PrettyButton