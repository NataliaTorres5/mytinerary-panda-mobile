import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CityCards from '../components/CityCards'

export default function Cities() {
    return (
        <ScrollView>
            <CityCards />
        </ScrollView>
    )
}