import { Dimensions } from 'react-native'
import { Image, View, Text, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { useGetCityIdQuery } from '../../features/citiesAPI'



const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function DetailCard(props) {

  const route = useRoute()

  const { data: city } = useGetCityIdQuery(route.params.id)

  const City = city?.response



  let foundationCity = new Date(City?.foundation)
  let foundationYear = foundationCity.getFullYear()


  return (
    <View style={{
      width: width,
      backgroundColor: 'lightblue'
    }} >


      <View>

        <Text>{City?.city}</Text>
        <Text>{City?.country}</Text>
        <Image
          style={{
            width: 50,
            height: 50
          }}
          source={{ uri: City?.photo }} />

        <Text>{City?.details}</Text>
        <Text>Population : {City?.population}</Text>
        <Text>{foundationYear}</Text>

      </View>
    </View>
  )
}