import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import googleIcon from '../../assets/google_icon1.png'
import twitterIcon from '../../assets/twitter_icon1.png'
import facebookIcon from '../../assets/facebook_icon1.png'

function Landing() {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Trading Books</Text>
            <Text style={styles.line}/>
        
            <TouchableOpacity style={styles.button}>
                <Image source={googleIcon} />
                <Text style={styles.buttonText}>Entre com Google </Text>
            </TouchableOpacity>
                
             <TouchableOpacity style={styles.button}>
                <Image source={twitterIcon} />
                <Text style={styles.buttonText}>Entre com Twitter </Text>
            </TouchableOpacity>
                
            <TouchableOpacity style={styles.button}>
                <Image source={facebookIcon} />
                <Text style={styles.buttonText}>Entre com Facebook </Text>
            </TouchableOpacity>

            <Text style={styles.line2}/>        
        </View> 
        
    );
}


export default Landing;