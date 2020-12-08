import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form'

import styles from './styles';
import InputField from '../../components/InputField';
import PrettyButton from '../../components/PrettyButton';
import ApiService from '../../services/ApiService';



const RegisterBook = () => {

    const { control, handleSubmit, errors } = useForm({
        mode: 'onBlur'
    })

    const onSubmit = ({ title, publisher, year, genre, isbn }) => {
        year = Number(year)
        const data = {
            book: {
                title,
                publisher,
                year,
                genre,
                isbn
            }
        }
        ApiService.UserBookRegister(data)
            .then(res =>
                console.log(res.data)
            )
            .catch(e => console.log(e))
    }

    return (
        <View style={{ backgroundColor: "#D11749", flex: 1, alignItems: "center" }}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Cadastre um livro!</Text>
            </View>
            <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                    <InputField
                        handler={value => onChange(value)}
                        label="Title"
                        onBlur={onBlur}
                        value={value}
                        secure={false}
                    />
                )}

                rules={{ required: true }}
            />
            {errors.title && errors.title.type === "required" && <Text>O título é obrigatorio.</Text>}
            <Controller
                name="publisher"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                    <InputField
                        handler={value => onChange(value)}
                        label="Editora"
                        onBlur={onBlur}
                        value={value}
                        secure={false}
                    />
                )}

                rules={{ required: true }}
            />
            {errors.publisher && errors.publisher.type === "required" && <Text>A editora é obrigatoria.</Text>}
            <Controller
                name="year"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                    <InputField
                        handler={value => onChange(value)}
                        label="Ano"
                        onBlur={onBlur}
                        value={value}
                        secure={false}
                    />
                )}

                rules={{ required: true }}
            />
            {errors.year && errors.year.type === "required" && <Text>O gênero é obrigatorio.</Text>}
            <Controller
                name="genre"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                    <InputField
                        handler={value => onChange(value)}
                        label="Gênero"
                        onBlur={onBlur}
                        value={value}
                        secure={false}
                    />
                )}

                rules={{ required: true }}
            />
            {errors.genre && errors.genre.type === "required" && <Text>O ISBN é obrigatorio.</Text>}
            <Controller
                name="isbn"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                    <InputField
                        handler={value => onChange(value)}
                        label="ISBN"
                        onBlur={onBlur}
                        value={value}
                        secure={false}
                    />
                )}

                rules={{ required: true }}
            />
            {errors.isbn && errors.isbn.type === "required" && <Text>O título é obrigatorio.</Text>}

            <PrettyButton onPress={handleSubmit(onSubmit)} label={"Adicionar"} />

        </View>

    )
}


export default RegisterBook;