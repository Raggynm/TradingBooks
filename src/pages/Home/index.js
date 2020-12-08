import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import book from '../../assets/book.png';

import Card from '../../components/ProductCard';
import CreateButton from '../../components/CreateButton';
import ApiService from '../../services/ApiService';

function Home() {

    const { navigate } = useNavigation()

    const [search, setSearch] = useState("")
    const [list, setList] = React.useState([])

    useEffect(() => {
        if (search != "")
            ApiService.Search(search)
                .then(res => {
                    setList(res.data)
                })
                .catch(e => console.log(e))
    }, [search])




    return (
        <View style={styles.container}>
            <View style={styles.field} >
                <View>
                    <AntDesign
                        style={styles.searchIcon}
                        name="search1"
                        size={16}
                        color="white"
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Pesquise Livros, Autores ou Lojas!"
                        placeholderTextColor="white"
                        style={styles.input}
                        onChangeText={(input) => setSearch(input)}
                    />
                </View>

            </View>
            {search == "" ?
                <ScrollView>

                    <View style={{ marginTop: 100 }}></View>
                    <View style={{ flex: 1, paddingTop: 20 }} >
                        <Text style={styles.title}>
                            Talvez você se interesse por...
                </Text>

                        <View style={{ height: 200, marginTop: 20 }}>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                {list.map((product, key) => {
                                    return <Card key={key} title={product.title} type={product.type} price={product.price} image={product.image} />
                                })}

                            </ScrollView>
                        </View>
                    </View>

                    <View style={{ flex: 1, paddingTop: 20 }} >
                        <Text style={styles.title}>
                            Talvez você se interesse por...
                </Text>

                        <View style={{ height: 200, marginTop: 20 }}>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                {list.map((product, key) => {
                                    return <Card key={key} title={product.title} type={product.type} price={product.price} image={product.image} />
                                })}

                            </ScrollView>
                        </View>
                    </View>


                </ScrollView>
                :
                <ScrollView>
                    <View style={{ marginTop: 120, marginBottom: 50 }}>
                        <Text style={styles.title}>
                            Resultados da pesquisa de: {search}
                        </Text>

                    </View>
                    <View style={styles.productAlign}>
                        {list.map((product, key) => {
                            return <Card key={key} title={product.title} type={product.type} price={product.price} image={product.image} announceId={product.announceId} />
                        })}
                    </View>

                </ScrollView>
            }

            <CreateButton />


        </View>

    );
}

export default Home