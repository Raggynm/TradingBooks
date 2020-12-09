import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form'

import styles from './styles';
import InputField from '../../components/InputField';
import PrettyButton from '../../components/PrettyButton';
import ApiService from '../../services/ApiService';
import { Picker } from '@react-native-picker/picker';


const MakeProposal = ({ route, navigation }) => {

    const [bookId, setBookId] = useState(0)
    const [title, setTitle] = useState("")
    const [announceId, setAnnounceId] = useState(0)

    const { navigate } = useNavigation()

    useEffect(() => {
        setBookId(route.params?.book.bookId)
        setAnnounceId(route.params?.book.announceId)
        setTitle(route.params?.book.title)
    }, [route.params?.book])

    const { control, handleSubmit, errors } = useForm({
        mode: 'onBlur'
    })

    const onSubmit = ({ title, description }) => {
        let data = {
            title,
            description,
            relevance: 0

        }
        ApiService.CreateProposal(data, announceId, bookId)
        .then(res => {
            console.log(res.data)
            navigate('Home')
        })
        .catch(e => console.log(e))
    }

    return (
        <View style={{ backgroundColor: "#D11749", flex: 1, alignItems: "center" }}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Faça uma proposta</Text>

            </View>
            <Text style={{ fontSize: 20, color: "#fff" }}>Livro: {title}</Text>
            <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                    <InputField
                        handler={value => onChange(value)}
                        label="Título"
                        onBlur={onBlur}
                        value={value}
                        secure={false}
                    />
                )}

                rules={{ required: true }}
            />
            {errors.title && errors.title.type === "required" && <Text>O título é obrigatorio.</Text>}
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


            <PrettyButton onPress={handleSubmit(onSubmit)} label={"Adicionar"} />

        </View>

    )
}


export default MakeProposal;