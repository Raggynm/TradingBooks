import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const CreateButton = (props) => {
    const { navigate } = useNavigation()

    const handleNavRegisterBook = () => {
        navigate('RegisterBook')
    }
    return (
        <TouchableOpacity style={styles.createButton} onPress={() => handleNavRegisterBook()}>
            <AntDesign name="plus" size={32} color="#fff" style={{ alignSelf: "center" }} />
        </TouchableOpacity>
    )
}

export default CreateButton