import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 

import styles from './styles';

function Landing() {

    return (
            <ScrollView>
                <View >
                    <View style={styles.header}>
                        <Image style={styles.productImg} 
                        source={require('../../assets/book.png')} />
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.productTitle}>Nome do Produto</Text>
                        <Text style={styles.productSubTitle}>Valor ou Troca</Text>
                        <Text style={styles.line} />
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etLorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                        <Text style={styles.line} />
                    </View>
                    <View style={styles.footer}>
                        <Image style={styles.perfilImg} 
                        source={require('../../assets/Perfil1.png')} />
                        <Text style={styles.storeTitle}>Nome da Loja</Text>
                        <TouchableOpacity style={styles.contactButton}>
                        <Text style={styles.contactTitle}>Menssagem</Text>
                        <FontAwesome style={styles.whatsapp} name="whatsapp" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View> 
            </ScrollView>

    );
}


export default Landing;