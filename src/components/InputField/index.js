import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const InputField = (props) => {

    return (
        <React.Fragment>
            <View style={styles.field}>
                <TextInput
                    style={styles.input}
                    value={props.value}
                    onChangeText={props.handler}
                    keyboardType={props.type}
                    secureTextEntry={props.secure}
                />
            </View>
            <Text style={styles.TitleField}>{props.label}</Text>
        </React.Fragment>
    )
}

export default InputField