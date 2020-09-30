import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import InputField from '../../components/InputField'

import styles from './styles';

function Login() {

    const { navigate } = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [password2, setPassword2] = useState("");
    const [user, setUser]=useState("");

    const handleUser = (text) => {
        setUser(text);
    }

    const handleEmail = (text) => {
        setEmail(text);
    }
    const handlePassword = (text) => {
        setPassword(text);
    }

    const handlePassword2 = (text) => {
        setPassword2(text);
    }


    function handleNavigationToLoginPage(){
        navigate('Login');
    }

    return (
        < View style={styles.container}>
             <Text style={styles.title}>Cadastre-se</Text>
             <Text style={styles.line} />
        
             <InputField 
                value={user} 
                handler={handleUser}  
                label="Usuário" 
                secure={false}
            />
             
             <InputField 
                value={email} 
                handler={handleEmail} 
                type="email-address" 
                label="Email" 
                secure={false}
            />
             
             <InputField 
                value={password} 
                handler={handlePassword} 
                label="Senha" 
                secure={true}
            />

            <InputField 
                value={password2} 
                handler={handlePassword2} 
                label="Confirme sua senha" 
                secure={true}
            />
            
            
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