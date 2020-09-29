import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function Login() {

    const { navigate } = useNavigation();

    const [email, setEmail]=useState("");
    const [senha, setSenha]=useState("");
    const [usuario, setUsuario]=useState("");

    function handleNavigationToLoginPage(){
        navigate('Login');
    }

    return (
        < View style={styles.container}>
             <Text style={styles.title}>Cadastre-se</Text>
             <Text style={styles.line} />
        
            <View style={styles.field}>
                <TextInput 
                style={styles.input}
                value={usuario}
                onChangeText={text=>setUsuario(text)}
                />
            </View>
            <Text style={styles.TitleField}>Usuário</Text>
            
            <View style={styles.field}>
                <TextInput 
                style={styles.input}
                value={senha}
                onChangeText={text=>setSenha(text)}
                secureTextEntry={true}

                />
            </View>
            <Text style={styles.TitleField}>Email</Text>

            <View style={styles.field}>
                <TextInput 
                style={styles.input}
                value={email}
                onChangeText={text=>setEmail(text)} 
                keyboardType="email-address" 

                />
            </View>
            <Text style={styles.TitleField}>Senha</Text>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.NewAccountButton}>Já tem uma conta ?  
                <Text onPress={handleNavigationToLoginPage}> clique aqui</Text>
            </Text>

        </View>
    );
}


export default Login;