import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';

import styles from './styles';

import book from '../../assets/book.png';

import Card from '../../components/ProductCard';
import { TouchableOpacity } from 'react-native-gesture-handler';


function UserProfile() {

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
            <View style={styles.profileContainer}>
                <Image style={styles.perfilImg}
                    source={require('../../assets/adriel.png')} />
                <Text style={styles.productTitle}>Adriel</Text>
                <View style={styles.infoContainer}>
                    <View style={styles.infoItem}>
                        <Text style={styles.info}>35</Text>
                        <Text style={styles.infoText}>Transações</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.info}>5/5</Text>
                        <Text style={styles.infoText}>Avaliação Geral</Text>
                    </View>
                </View>
                <View style={{height: 75, width: 100}}>
                    <TouchableOpacity style={styles.buttonInfo}>
                        <View styles={styles.buttonInfoView}>
                            <Text style={styles.info}>Botaozoide</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </View>
        </ScrollView>

    );
}


export default UserProfile;