import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CityCards from '../components/CityCards'
import { useNavigation } from '@react-navigation/native'

export default function Cities(props) {

    const navigation = useNavigation()



    console.log(props)
    return (
        <ScrollView>
            <CityCards navigation={navigation} />
        </ScrollView>
    )
}

