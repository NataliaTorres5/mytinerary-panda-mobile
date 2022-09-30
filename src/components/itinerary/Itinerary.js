// Imports 
import { Dimensions } from 'react-native'
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import Activity from '../../components/itinerary/Activities'
import AllComments from '../itinerary/Comments/AllComments'
import { useGetAllItinerariesQuery } from '../../features/itineraryAPI'



const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function itinerary(props){

    const user = useSelector((state) => state.logged.userState)

    const { data: itineraries } = useGetAllItinerariesQuery(props.id)
    const itinerary = itineraries?.response


    const itineraryPic = (item) => {
        return(
            <View
            style={{
                width: width,
                backgroundColor: '#636fa4',
                padding: '2%',
          
              }}>
                <View
                 style= {{
                    alignItems:'center',
                    backgroundColor: 'lavender',
                    borderRadius: 15,
                    padding: '2%',
                    justifyContent: 'center',
                    
                    
                  }}>
                <Activity id={item._id} />
                <Text
                 style={{
                    width:'60%'
                }}>{item.name}</Text>
                <Text>{item.city.city}</Text>
                <Text> Price: {item.price}</Text>
                <Text
                style={{
                    paddingBottom: 30,
                }}>Duration of the activity: {item.duration}</Text>
                < AllComments id={item._id}  />
                </View>
            </View>
        )
    }

    return (

        <View>
        {itinerary?.map(itineraryPic)}
        </View>
    )
}

