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

    const onSubmit = ({ username, email, password}) => {
        ApiService.SignUp({ username, email, password})
        .then(res => {
            console.log(res.data, res.status)
            setTimeout(()=>{
                navigate('Login')
            }, 1000)
        })
        .catch(e => console.log(e))
        
    }

    // ApiService.SignUp({ username, email, password })

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
            {errors.username && <Text>This is required.</Text>}

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

            rules={{ required: true }}
            />
            {errors.email && <Text>This is required.</Text>}


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

            rules={{ required: true }}
            />
            {errors.password && <Text>This is required.</Text>}

            <Controller
                name="confirmPass"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                    <InputField
                        handler={value => onChange(value)}
                        label="Confirme a senha"
                        onBlur={onBlur}
                        value={value}
                        secure={true}
                    />
                )}

            rules={{ required: true }}
            />
            {errors.confirmPass && <Text>This is required.</Text>}

            {/* <InputField
                handler={value => setEmail(value)}
                type="email-address"
                label="Email"
                value={email}
                secure={false}
            />

            <InputField
                handler={value => setPassword(value)}
                label="Senha"
                value={password}
                secure={true}
            />

            <InputField
                handler={value => setConfirmPass(value)}
                label="Confirme sua senha"
                value={confirmPass}
                secure={true}
            />

            {renderError()} */}


            {/* <Button onPress={handleSubmit(onSubmit)} title="Submit" label="Submit">
                Criar
            </Button> */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Criar</Text>
            </TouchableOpacity>

            <Text style={styles.NewAccountButton}>Já tem uma conta ?
                <Text onPress={() => navigate('Login')}> clique aqui</Text>
            </Text>

        </View>
    );
}


export default Login;