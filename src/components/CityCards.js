import { View, Text, Image, StyleSheet, } from 'react-native'
import React, {useRef, useState } from 'react'
import { useGetAllCitiesQuery } from '../features/citiesAPI'
import SearchBar from './SearchBar'


export default function cityCards() {

    const [search, setSearch] = useState('')

    const {
        data: cities,
    } = useGetAllCitiesQuery(search)

    const cityPic = (item) => (
        < View >
            <Image
                style={styles.tinyLogo}
                contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
                source={{ uri: item.photo }} />
            <Text>{item.city}  </Text>
            <Text>{item.intro}  </Text>
        </View>
    )
    console.log(cities)

    return (
        <View
            style={{ flex: 1, width: "100%" }}
            contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
                height: "90%",
            }}
        >
        <Text style={{
                fontSize: 40,
                textAlign: "center",
                padding: 5,
                textShadowColor: "gray",
            }} >
                CITIES
        </Text>

        <SearchBar 
        value={search}
        onChangeText={(search) => setSearch(search) }
        
        />

            {cities?.response.map(cityPic)}
        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 80,
        height: 80,
    },

    cityScreen: {
        alignItems: "center",

    },
});


