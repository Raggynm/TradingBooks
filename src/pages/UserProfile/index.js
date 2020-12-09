import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';

import styles from './styles';

import book from '../../assets/book.png';

import Card from '../../components/ProductCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthContext from '../../services/auth/authContext';


function UserProfile() {

    const { user } = useContext(AuthContext)
    
    return (
        <ScrollView>
            <View style={styles.profileContainer}>
                <Image style={styles.perfilImg}
                    source={require('../../assets/imagemperfil.png')} />
                <Text style={styles.productTitle}>{user.username}</Text>
                
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