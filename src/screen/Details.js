import { Dimensions } from 'react-native'
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import DetailCard from '../components/detailCard/DetailCard'
import Itinerary from '../components/itinerary/Itinerary'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function Details() {

  const route = useRoute()

  return (

    <ScrollView
   >
 
      <DetailCard id={route.params.id} />
      <Itinerary id={route.params.id} />

      </ScrollView>

  )
}

//navigation={navigation}