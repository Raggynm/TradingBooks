import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function Landing() {
    const { navigate } = useNavigation();

    function handleNavigationToLoginPage(){
        navigate('Login');
    }

    function handleNavigationSignUpPage(){
        navigate('SignUp')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Trading Books</Text>
            <Text style={styles.line} />

            <View style={styles.containerButtons}>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.iconView}>
                            <Icon name="google" size={40} />
                        </View>
                        <View style={styles.buttonTextView}>
                            <Text style={styles.buttonText}>Entre com Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.iconView}>
                            <Icon name="twitter" size={40} />
                        </View>
                        <View style={styles.buttonTextView}>
                            <Text style={styles.buttonText}>Entre com Twitter</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.iconView}>
                            <Icon name="facebook" size={40} />
                        </View>
                        <View style={styles.buttonTextView}>
                            <Text style={styles.buttonText}>Entre com Facebook</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>


            <Text style={styles.line2} />

            <View style={styles.bottomContainer}>
                <TouchableOpacity
                onPress={handleNavigationSignUpPage} 
                style={styles.buttonWoutBackground}>
                    <Text style={styles.textButtonb2}>Cadastre-se</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                onPress={handleNavigationToLoginPage} 
                style={styles.buttonWoutBackground}
                >
                    <Text style={styles.textButtonb2}>Entre aqui</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}


export default Landing;