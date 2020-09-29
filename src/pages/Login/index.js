import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function Login() {

    const [email, setEmail]=useState("");
    const [senha, setSenha]=useState("");

    const { navigate } = useNavigation();

    function handleNavigationSignUpPage(){
        navigate('SignUp')
    }

    return (
        < View style={styles.container}>
             <Text style={styles.title}>login</Text>
             <Text style={styles.line} />
        
            <View style={styles.field}>
                <TextInput 
                style={styles.input}
                value={email}
                onChangeText={text=>setEmail(text)} 
                keyboardType="email-address"
                />
            </View>
            <Text style={styles.TitleField}>Email</Text>
            
            <View style={styles.field}>
                <TextInput 
                style={styles.input}
                value={senha}
                onChangeText={text=>setSenha(text)}
                secureTextEntry={true}

                />
            </View>
            <Text style={styles.TitleField}>Senha</Text>
            
            <Text style={styles.remenber}>Esqueceu sua senha ? </Text>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.NewAccountButton}>Não tem uma conta ?  
                <Text onPress={handleNavigationSignUpPage}> clique aqui</Text>
            </Text>

        </View>
    );
}


export default Login;