import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from './styles';

import book from '../../assets/book.png';

import Card from '../../components/ProductCard';


function MyMarket() {

    const [list, setList] = React.useState([
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
            <ScrollView>
                <View style={{ backgroundColor: '#D11749',}}>
                    <View style={styles.header}>
                        <Image style={styles.perfilImg} 
                        source={require('../../assets/Perfil1.png')} />
                        <Text style={styles.marketTitle}>Nome da Loja</Text>
                        <Text style={styles.description}>Descrição da Loja </Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Text>
                    </View>
                    <View style={styles.productContainer}>
                        <Text style={styles.productTitle}>Produtos</Text>
                        <View style={styles.productAlign}>    
                        {list.map((product) => {
                            return <Card title={product.title} type={product.type} price={product.price} image={product.image} />
                        })}
                        </View>
                    </View>
                </View> 
            </ScrollView>

    );
}


export default MyMarket;