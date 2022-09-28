import { View, Text } from 'react-native'
import React from 'react'
import { useGetAllCitiesQuery } from '../../features/citiesAPI'
import { useParams } from 'react-router-dom'

export default function DetailCard(props) {

    const id = useParams()

    const {
        data: cities
        } = useGetAllCitiesQuery(id)

        let city = cities?.response

        let foundationCity = new Date (city?.foundation)
        let foundationYear =  foundationCity.getFullYear()


  return (
    <View>
      <Text>DetailCard</Text>
    </View>
  )
}