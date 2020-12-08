import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form'

import styles from './styles';
import InputField from '../../components/InputField';
import PrettyButton from '../../components/PrettyButton';
import ApiService from '../../services/ApiService';
import { Picker } from '@react-native-picker/picker';


const CreateAnnounce = ({ route, navigation }) => {

    const [bookId, setBookId] = useState(0)

    useEffect(() => {
        setBookId(route.params?.book.bookId)
    }, [route.params?.book])

    const { control, handleSubmit, errors } = useForm({
        mode: 'onBlur'
    })

    const [type, setType] = useState("sell")

    const onSubmit = ({title, description, price}) => {
        price = parseFloat(price)
        let data = {
            announce: {
                title, description, price, type
            }
            
        }
        ApiService.AnnounceCreate(data, bookId)
        .then(res => console.log(res.data))
        .catch(e => console.log(e))
    }

    return (
        <View style={{ backgroundColor: "#D11749", flex: 1, alignItems: "center" }}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Crie um anuncio</Text>
                
            </View>
            <Text style={{fontSize: 20, color:"#fff"}}>Livro: {route.params?.book.title}</Text>
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
                name="price"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                    <InputField
                        handler={value => onChange(value)}
                        label="Preço"
                        onBlur={onBlur}
                        value={value}
                        secure={false}
                    />
                )}

                rules={{ required: true }}
            />
            {errors.publisher && errors.publisher.type === "required" && <Text>A editora é obrigatoria.</Text>}
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
            {errors.year && errors.year.type === "required" && <Text>O gênero é obrigatorio.</Text>}

            <Picker
                selectedValue={type}
                style={{ height: 50, width: 300, marginTop: 10, color: "#000" }}
                onValueChange={(itemValue, itemIndex) =>
                    setType(itemValue)
                }>
                <Picker.Item label="Troca" value="trade" />
                <Picker.Item label="Venda" value="sell" />
                <Picker.Item label="Venda ou Troca" value="trade sell" />
            </Picker>

            <PrettyButton onPress={handleSubmit(onSubmit)} label={"Adicionar"} />

        </View>

    )
}


export default CreateAnnounce;