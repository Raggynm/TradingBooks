import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form'

import styles from './styles';
import InputField from '../../components/InputField';
import PrettyButton from '../../components/PrettyButton';
import ApiService from '../../services/ApiService';



const RegisterStore = () => {

    const { control, handleSubmit, errors } = useForm({
        mode: 'onBlur'
    })

    const { navigate } = useNavigation()

    const onSubmit = ({ name, description }) => {
        const data = {
            name,
            description,
            rate: 0,
            transactions: 0
        }
        ApiService.CreateStore(data)
            .then(res => {
                console.log(res.data)
                setTimeout(() => {
                    navigate('MyMarket')
                }, 1000)
                
            }

            )
            .catch(e => console.log(e))
    }

    return (    
        <View style={{ backgroundColor: "#D11749", flex: 1, alignItems: "center" }}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Cadastre uma loja!</Text>
            </View>
            <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                    <InputField
                        handler={value => onChange(value)}
                        label="Nome da loja"
                        onBlur={onBlur}
                        value={value}
                        secure={false}
                    />
                )}

                rules={{ required: true }}
            />
            {errors.name && errors.name.type === "required" && <Text>O nome é obrigatorio.</Text>}
            <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                    <InputField
                        handler={value => onChange(value)}
                        label="Descrição"
                        onBlur={onBlur}
                        value={value}
                        secure={false}
                    />
                )}

                rules={{ required: true }}
            />
            {errors.description && errors.description.type === "required" && <Text>A descrição é obrigatoria.</Text>}

            <PrettyButton onPress={handleSubmit(onSubmit)} label={"Criar loja"} />

        </View>

    )
}


export default RegisterStore;