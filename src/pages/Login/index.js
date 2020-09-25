import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import styles from './styles';

function Login() {
    return (
        < View style={styles.container}>
             <Text style={styles.login}>login</Text>
             <Text style={styles.line} />
        
            <View style={styles.field}>
                <TextInput style={styles.input} />
            </View>
            
            <Text style={styles.TitleField}>Email</Text>
            
            <View style={styles.field}>
                <TextInput style={styles.input} />
            </View>
            
            <Text style={styles.TitleField}>Senha</Text>
            <Text style={styles.remenber}>Esqueceu sua senha ? </Text>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.NewAccountButton}>Ainda não tem uma conta ? crie</Text>


        </View>
    );
}


export default Login;