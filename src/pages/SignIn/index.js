import React,{useState, useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import InputField from '../../components/InputField'
import { useForm, Controller } from 'react-hook-form'
import AuthContext from '../../services/auth/authContext'

import styles from './styles';

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { Login, loading } = useContext(AuthContext);

    const { control, handleSubmit, errors } = useForm({
        mode: 'onBlur'
    })

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

    function handleNavigationHomePage(){
        navigate('Home')
    }

    const onSubmit = ({ email, password}) => {
        
        const data = {
            email,
            password,
        };
        Login(data).then(res => {
            setTimeout(() => {
                navigate('Home')
            }, 1000)
        })

    }

    return (
        < View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.line} />
        
            <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                    <InputField
                        handler={value => onChange(value)}
                        label="E-mail"
                        onBlur={onBlur}
                        value={value}
                        secure={false}
                    />
                )}

            rules={{ required: true,
            pattern: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ }}
            />
            {errors.email && errors.email.type === "required" && <Text>E-mail é obrigatorio.</Text>}
            {errors.email && errors.email.type === "pattern" && <Text>Isso não é um e-mail.</Text>}

            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                    <InputField
                        handler={value => onChange(value)}
                        label="Senha"
                        onBlur={onBlur}
                        value={value}
                        secure={true}
                    />
                )}

            rules={{ required: true, minLength: 6 }}
            />
            {errors.password && errors.password.type === "required" && <Text>A senha é obrigatoria.</Text>}
            {errors.password && errors.password.type === "minLength" && <Text>A senha é muito curta</Text>}
            
            
            <Text style={styles.remenber}>Esqueceu sua senha ? </Text>
            
            <TouchableOpacity 
                            onPress={handleSubmit(onSubmit)}
            style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.NewAccountButton}>Não tem uma conta ?  
                <Text onPress={handleNavigationSignUpPage}> clique aqui</Text>
            </Text>

        </View>
    );
}


export default SignIn;