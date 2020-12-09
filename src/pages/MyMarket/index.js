import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from './styles';

import book from '../../assets/book.png';

import Card from '../../components/ProductCard';
import PrettyButton from '../../components/PrettyButton';

import AuthContext from '../../services/auth/authContext'
import { set } from 'react-native-reanimated';
import ApiService from '../../services/ApiService';
import ProductCard from '../../components/ProductCard';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const MyMarket = ({ navigation }) => {

    const { navigate } = useNavigation()

    const [hasStore, setHasStore] = useState(false)



    const { user, setStoreId } = useContext(AuthContext)
    const [data, setData] = useState({})
    const [announces, setAnnounces] = useState([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            ApiService.StoreFindByUser()
                .then((res) => {
                    console.log(res.data)
                    setData(res.data)
                    if (res.data.announces != null)
                        setAnnounces(res.data.announces)
                    if (res.data.storeId != null)
                        setStoreId(res.data.storeId)
                })

        })
        return unsubscribe
    }, [navigation])





    return (
        <>
            { data == "" ?
                <View style={{ backgroundColor: '#D11749', flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                    <PrettyButton label="Criar Loja" onPress={() => navigate('RegisterStore')} />
                </View > : <ScrollView>
                    <View style={{ backgroundColor: '#D11749', }}>
                        <View style={styles.header}>
                            <Image style={styles.perfilImg}
                                source={require('../../assets/Perfil1.png')} />
                            <Text style={styles.marketTitle}>{data.name}</Text>
                            <Text style={styles.description}>{data.description}</Text>
                        </View>
                        <View style={styles.productContainer}>
                            <Text style={styles.productTitle}>Produtos</Text>

                            <View style={styles.productAlign}>
                                {announces.map(
                                    (item, key) => {
                                        return <ProductCard
                                            key={key}
                                            announceId={item.announceId}
                                            title={item.title}
                                            price={item.price}
                                            description={item.description}
                                            type={item.type}
                                            storeId={item.storeId}
                                        />
                                    }
                                )}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            }
        </>




    );
}




export default MyMarket;