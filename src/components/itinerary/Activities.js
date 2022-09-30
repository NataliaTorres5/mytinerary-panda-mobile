import { View, Text,Image,  StyleSheet, ScrollView} from 'react-native'
import { useGetAllActivitiesQuery } from '../../features/activityAPI'
import { useRoute } from '@react-navigation/native'
import React from 'react'

export default function activity(props) {


    const {
        data: activities,
    } = useGetAllActivitiesQuery(props.id)

console.log(activities)

    const activityPic = (item, index) => {return(

        <View key={index}
        
        style={{
            width: '100%',
            justifyContent:'center',
            alignItems:'center',
        }}>

            <Text
            
            style={{
                width:'90%',
                textAlign: 'center',
                padding: '5%',
                fontSize: 15,
            }}>{item?.name} </Text>


            <Image
                style={{
                    width: 360,
                    height:300,
                    borderRadius:20,
                }}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                source={{ uri: item?.photo }} />



        </View>

    )}



    return (
        <ScrollView>
            {activities?.response.map(activityPic)}
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    cityScreen: {
        alignItems: "center",
        justifyContent: 'center',
        width: '100%',
        height: '100%',

    },
});

