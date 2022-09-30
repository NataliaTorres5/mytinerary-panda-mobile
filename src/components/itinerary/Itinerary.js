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
            <View>
                <Activity id={item._id} />
                <Text>{item.name}</Text>
                <Text>{item.city.city}</Text>
                <Text>{item.price}</Text>
                <Text>{item.likes}</Text>
                <Text>{item.tags}</Text>
                <Text>{item.duration}</Text>
                < AllComments id={item._id}  />
            </View>
        )
    }

    return (

        <View>
        {itinerary?.map(itineraryPic)}
        </View>
    )
}

