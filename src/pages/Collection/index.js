import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import SelectItem from '../../components/SelectItem'
import ApiService from '../../services/ApiService'
import styles from './styles'

const fruits = ['Apples', 'Oranges', 'Pears']
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

const Collection = ({ route, navigation }) => {



    const [list, setList] = useState([])
    const [type, setType] = useState("announce")
    const [announceId, setAnnounceId] = useState(0)

    useEffect(() => {
        if(route.params?.type === "proposal"){
            setType("proposal")
            setAnnounceId(route.params?.announceId)
        }
        else
        setType("announce")

        console.log(route.params?.type)
    }, [route.params?.type])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            ApiService.UserBookFind()
                .then((res) => {
                    console.log(res.data)
                    setList(res.data)
                })
            
        })
        return unsubscribe
    }, [navigation])

    return (
        <ScrollView style={{ backgroundColor: "#D11749" }}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Seu acervo</Text>
            </View>
            <View style={{ marginTop: 50, alignItems: "center" }}>
                {list.map((item, key) => {
                    return <SelectItem key={key} type={type} announceId={announceId} bookId={item.bookId} title={item.title} />
                })}
            </View>
        </ScrollView>


    )

}
export default Collection