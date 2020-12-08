import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles';
import book from '../../assets/book.png'

const ProductCard = (props) => {

    const { navigate } = useNavigation();
    const [announceId, setAnnounceId] = useState(props.announceId)
    const [title, setTitle] = useState(props.title)
    const [description, setDescription] = useState(props.description)
    const [type, setType] = useState(props.type)
    const [price, setPrice] = useState(props.price)
    const [storeId, setStoreId] = useState(props.storeId)

    function handleNavigationProductPage() {
        navigate('ProductPage', {
            product: {
                announceId,
                title,
                description,
                type,
                price,
                storeId
            }

        })
    }

    return (
        <TouchableOpacity onPress={handleNavigationProductPage}>
            <View style={styles.border} >
                <View style={{ flex: 2 }}>
                    <Image
                        source={book}
                        style={styles.img} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.texTitle} >{title}</Text>
                    <Text style={styles.textPrince} >R$ {parseFloat(price).toFixed(2)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard