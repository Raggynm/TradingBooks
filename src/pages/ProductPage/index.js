import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';


function ProductPage({ navigation, route }) {

    const [image, setImage] = useState(require('../../assets/book.png'))
    const [product, setProduct] = useState({})
    const [blur, setBlur] = useState(0)
    const [type, setType] = useState("")

    const handleScroll = (event) => {
        let blurUp = event.nativeEvent.contentOffset.y / 100
        blurUp > 2 ? setBlur(2) : setBlur(blurUp)
    }

    useEffect(() => {
        if (route.params?.product) {
            setProduct(route.params.product)
            setType(route.params.product.type)
        }
    }, [route.params?.product])

    const handleSell = () => {
        console.log("vendeu")
    }

    const handleTrade = () => {
        console.log("ofereceu")
    }


    return (
        <>

            <View style={styles.header}>
                <Image style={styles.productImg}
                    source={image}
                    blurRadius={blur} />
            </View>
            <ScrollView onScroll={handleScroll}>

                <View style={{ marginTop: 600 }}>

                    <View style={styles.body}>
                        <Text style={styles.productTitle}>{product.title}</Text>
                        <Text style={styles.productSubTitle}>R$ {parseFloat(product.price).toFixed(2)}</Text>
                        <Text style={styles.line} />
    <Text style={styles.description}>{product.description}</Text>
                        <Text style={styles.line} />
                    </View>
                    <View style={styles.footer}>
                        
                        <View style={styles.transactionContainer}>
                            {
                                type.includes("sell") ?
                                    < TouchableOpacity style={styles.contactButton} onPress={handleSell} >
                                        <Text style={styles.contactTitle}>Comprar</Text>
                                    </TouchableOpacity >
                                    :
                                    <>
                                    </>
                            }
                            {
                                type.includes("trade") ?
                                    < TouchableOpacity style={styles.contactButton} onPress={handleTrade} >
                                        <Text style={styles.contactTitle}>Oferecer</Text>
                                    </TouchableOpacity >
                                    :
                                    <>
                                    </>
                            }
                        </View>

                    </View>
                </View>
            </ScrollView>
        </>
    );
}


export default ProductPage;