import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import book from '../../assets/book.png'
import SelectMultiple from 'react-native-select-multiple'

import Card from '../../components/UserBookCard'
import styles from './styles';

const renderLabel = (label, style) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ width: 42, height: 42 }} source={{ uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S' }} />
            <View style={{ marginLeft: 10 }}>
                <Text style={style}>{label}</Text>
            </View>
        </View>
    )
}


function Collection() {

    const [selected, setSelected] = useState([])

    const books = [
        {
            label: "Titulo", value: {
                title: "Titulo",
                price: "R$ 50,00",
                image: book
            }
        },
        {
            label: "Titulo", value: {
                title: "Titulo",
                price: "R$ 50,00",
                image: book
            }
        },
        {
            label: "Titulo", value: {
                title: "Titulo",
                price: "R$ 50,00",
                image: book
            }
        },
        {
            label: "Titulo", value: {
                title: "Titulo",
                price: "R$ 50,00",
                image: book
            }
        },
    ]

    const onSelection = (selectedItems) => {
        setSelected( old => [...old, selectedItems] )
    }


    return (
        <View>
            <View style={styles.titleView}>
                <Text style={styles.title}>Acervo</Text>
            </View>
            <View>
                <SelectMultiple
                    items={books}
                    renderLabel={renderLabel}
                    selectedItems={selected}
                    onSelectionsChange={onSelection} />
            </View>
        </View>


    )
}

export default Collection;