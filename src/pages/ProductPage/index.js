import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';
import AuthContext from '../../services/auth/authContext';
import ApiService from '../../services/ApiService';


function ProductPage({ navigation, route }) {

    const { storeId } = useContext(AuthContext)

    const [image, setImage] = useState(require('../../assets/book.png'))
    const [product, setProduct] = useState({})
    const [blur, setBlur] = useState(0)
    const [type, setType] = useState("")

    const { navigate } = useNavigation()

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
        ApiService.FinishSell(product.announceId)
            .then((res) => {
                console.log(res)
                navigate('Home')
            })
            .catch(e => console.log(e))
    }

    const handleTrade = () => {
        navigate('Collection', {
            type: "proposal",
            announceId: product.announceId
        })
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
                        {storeId === product.storeId ?
                            <></>
                            :
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


                        }


                    </View>
                </View>
            </ScrollView>
        </>
    );
}


export default ProductPage;