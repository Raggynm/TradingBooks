import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const ProductCard = (props) => {

    return (
        <View style={styles.border}>
            <View style={{ flex: 2 }}>
                <Image
                    source={props.image}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
            </View>
            <View style={{ flex: 1 }}>
                <Text>{props.title}</Text>
                <Text>{props.price}</Text>
                <Text>{props.type}</Text>
            </View>
        </View>
    )
}

export default ProductCard