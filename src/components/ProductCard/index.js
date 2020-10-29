import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles';

const ProductCard = (props) => {

    const { navigate } = useNavigation();
    
    function handleNavigationProductPage(){
        navigate('ProductPage')
    }

    return (
        <TouchableOpacity onPress={handleNavigationProductPage}>    
        <View style={styles.border} >
            <View style={{flex: 2}}>
                    <Image
                        source={props.image}
                        style={styles.img} />
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.texTitle} >{props.title}</Text>
                <Text style={styles.textPrince} >{props.price}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default ProductCard