import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form'

import styles from './styles';
import InputField from '../../components/InputField';
import PrettyButton from '../../components/PrettyButton';
import ApiService from '../../services/ApiService';



const Proposal = ({ route, navigation }) => {

    const [proposalId, setProposalId] = useState(route.params?.proposal.proposalId)
    const [announceId, setAnnounceId] = useState(route.params?.proposal.offerTable.announceId)
    const [proposal, setProposal] = useState(route.params?.proposal)

    const { navigate } = useNavigation()

    const onSubmit = () => {

        ApiService.AcceptProposal(announceId, proposalId)
        .then(res => {
            console.log(res)
            navigate('MyMarket')
        })
        .catch(e => console.log(e))
    }

    return (
        <View style={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
            <Text style={{
                fontFamily: 'RedHatDisplay_500Medium',
                fontSize: 30,
                marginTop: 30,
                marginBottom: 10,
                color: '#000'
            }}>Proposta: {proposal.title}</Text>
            <Text style={{
                fontFamily: 'RedHatDisplay_500Medium',
                fontSize: 20,
                marginTop: 30,
                marginBottom: 10,
                color: '#000'
            }}>Descrição: {proposal.description}</Text>

            <PrettyButton onPress={onSubmit} label={"Aceitar"} />
        </View >



    )
}


export default Proposal;