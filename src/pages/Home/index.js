import React from 'react'
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import styles from './styles';

import book from '../../assets/book.png';

import Card from '../../components/ProductCard';

function Home() {

    const [list, setList] = React.useState([
        {
            title: "Titulo",
            price: "R$ 50,00",
            image: book
        },
        {
            title: "Titulo",
            price: "R$ 50,00 ou Trocas",
            image: book
        },
        {
            title: "Titulo",
            price: "Valor ou Troca",
            image: book
        },
        {
            title: "Titulo",
            price: "Valor ou Troca",
            image: book
        },
        {
            title: "Titulo",
            price: "Valor ou Troca",
            image: book
        },
    ])

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
                    />
                </View>

            </View>
            <ScrollView>

                <View style={{ marginTop:100 }}></View>
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

                <View style={{ flex: 1, paddingTop: 5 }} >
                    <Text style={styles.title}>
                        Perto de você
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


        </View>

    );
}

export default Home