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
            width: '100%'
        }}>

            <Text>{item?.name} </Text>


            <Image
                style={styles.tinyLogo}
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
    tinyLogo: {
        width: 150,
        height: 150,
        marginBottom: 0,
        marginTop: 0
    },

    cityScreen: {
        alignItems: "center",
        justifyContent: 'center',
        width: '100%',
        height: '100%',

    },
});

