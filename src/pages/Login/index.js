import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import InputField from '../../components/InputField'

import styles from './styles';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { navigate } = useNavigation();

    const handleEmail = (text) => {
        setEmail(text);
    }

    const handlePassword = (text) => {
        setPassword(text);
    }

    function handleNavigationSignUpPage(){
        navigate('SignUp')
    }

    return (
        < View style={styles.container}>
            <Text style={styles.title}>login</Text>
            <Text style={styles.line} />
        

            <InputField value={email} handler={handleEmail} type="email-address" label="Email" secure={false}/>

            <InputField value={password} handler={handlePassword} label="Senha" secure={true}/>
            
            
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