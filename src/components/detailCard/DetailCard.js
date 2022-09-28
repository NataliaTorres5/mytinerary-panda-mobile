import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { useGetAllCitiesQuery } from '../../features/citiesAPI'
import { useParams } from 'react-router-dom'

export default function DetailCard(props) {

    const route = useRoute()

    const {
        data: cities
        } = useGetAllCitiesQuery(route.params.id)

        let city = cities?.response

        let foundationCity = new Date (city?.foundation)
        let foundationYear =  foundationCity.getFullYear()


  return (
    <View>
      <Text>{route.params.id}
      </Text>
    </View>
  )
}