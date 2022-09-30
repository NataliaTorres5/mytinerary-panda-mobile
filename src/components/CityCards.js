import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { useGetAllCitiesQuery } from '../features/citiesAPI'
import SearchBar from './SearchBar'
import { useNavigation } from '@react-navigation/native'

//

export default function cityCards() {

    const navigation = useNavigation()

    const [search, setSearch] = useState('')

    const {
        data: cities,
    } = useGetAllCitiesQuery(search)

    const cityPic = (item, index) => (
        <View key={index}
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            
        }} >

            <Image
            resizeMode="cover"
                style={styles.tinyLogo}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                source={{ uri: item.photo }} />
                <Text
                style={{
                    fontSize: 20,
                }}>
                    {item.city}  
                    </Text>

                <Text
                style={{
                    width:'50%',
                    fontSize: 12,
                    paddingVertical: '5%',
                    textAlign:'center',
                }}>{item.intro}  </Text>

            <TouchableOpacity
            style= {{
                paddingHorizontal: '5%',
                paddingVertical: '2%',
                backgroundColor: '#636fa4',
                borderRadius: 10, 
            }}
                onPress={() => navigation.navigate("Details", {id:item._id})}>

                <Text
                style={{
                    color: '#fff'
                }}> See more!</Text>

            </TouchableOpacity>

        </View>
    )

    return (
        <View
        style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#636fa4',
        }}>

            <SearchBar
                
                value={search}
                onChangeText={(search) => setSearch(search)}
            />

            < View 
              style={{
                justifyContent:'center',
                textAlign: 'center',
                paddingVertical: 5,
                backgroundColor: 'lavender',
                borderRadius: 20,
                marginVertical: '2%',
                marginHorizontal: '2%'

            }}>
                {cities?.response.map(cityPic)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 250,
        height: 100,
        marginTop: 20,
        borderRadius: 10,
    },

    cityScreen: {
        alignItems: "center",
        justifyContent: 'center',

    },
});


