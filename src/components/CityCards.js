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
        <View key={index}>

            <Image
                style={styles.tinyLogo}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                source={{ uri: item.photo }} />
                <Text>
                    {item.city}  
                    </Text>

                <Text>{item.intro}  </Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("Details", {id:item._id})}>

                <Text> To see more press here</Text>

            </TouchableOpacity>

        </View>
    )

    return (
        <View>

            <SearchBar
                style={{
                    width: '100%',
                    marginTop: 0
                }}
                value={search}
                onChangeText={(search) => setSearch(search)}
            />

            < View >
                {cities?.response.map(cityPic)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 10,
        height: 10,
    },

    cityScreen: {
        alignItems: "center",
        justifyContent: 'center',
        width: '100%',
        height: '100%',

    },
});


