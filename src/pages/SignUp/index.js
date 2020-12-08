import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native'
import InputField from '../../components/InputField'
import ApiService from '../../services/ApiService'
import { useForm, Controller } from 'react-hook-form'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'

import styles from './styles';



const Login = () => {

    const { navigate } = useNavigation()

    const { control, handleSubmit, errors } = useForm({
        mode: 'onBlur'
    })

    const [apierror, setApierror] = useState(null)

    const onSubmit = ({ username, email, password}) => {
        ApiService.SignUp({ username, email, password})
        .then(res => {
            console.log(res.data, res.status)
            setTimeout(()=>{
                navigate('SignIn')
            }, 1000)
        })
        .catch(e => setApierror(e))
        
    }

    return (
        < View style={styles.container}>
            <Text style={styles.title}>Cadastre-se</Text>
            <Text style={styles.line} />

            <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                    <InputField
                        handler={value => onChange(value)}
                        label="Nome de usuário"
                        onBlur={onBlur}
                        value={value}
                        secure={false}
                    />
                )}

            rules={{ required: true }}
            />
            {errors.username && <Text>Username é obrigatorio.</Text>}

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

            
                {apierror && <Text>{apierror || ""}</Text>}
         
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Criar</Text>
            </TouchableOpacity>

            <Text style={styles.NewAccountButton}>Já tem uma conta ?
                <Text onPress={() => navigate('SignIn')}> clique aqui</Text>
            </Text>

        </View>
    );
}


export default Login;