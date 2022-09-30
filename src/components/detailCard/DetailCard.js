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
      backgroundColor: '#636fa4',
      padding: '2%',

    }} >


      <View
      style= {{
        alignItems:'center',
        backgroundColor: 'lavender',
        borderRadius: 15,
        padding: '2%',
        
      }}>

        <Text
        style={{
          textAlign: 'center',
          fontSize: 30
        }} >{City?.city}</Text>
        <Text
          style={{
            fontSize: 20,
            fontStyle: "italic",
            padding: '2%',
          }} >{City?.country}</Text>
        <Image
          style={{
            width: 350,
            height: 200,
            borderRadius: 15,
            padding: '2%',
          }}
          source={{ uri: City?.photo }} />

        <Text
        style={{
          padding: '2%',
          textAlign:'justify',
        }}>{City?.details}</Text>
        <Text
         style={{
          padding: '2%',
          textAlign:'justify',
        }}>Population : {City?.population}</Text>
        <Text
         style={{
          padding: '2%',
          textAlign:'justify',
        }}>Foundation time: {foundationYear}</Text>

      </View>
    </View>
  )
}