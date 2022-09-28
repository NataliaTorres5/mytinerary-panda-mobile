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
                 <Text style={{
                    width: '50%',
                    textAlign: 'center',
                    marginBottom: 10,
                    marginTop: 3,


                }}>{item.city}  </Text>
                <Text style={{
                    width: '50%',
                }}
                >{item.intro}  </Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("Details", {id:item._id})}
            >

                <Text> To see more press here</Text>


               

            </TouchableOpacity>

        </View>
    )

    return (
        <View
            style={{
                width: "100%",
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >

            <SearchBar
                style={{
                    width: '100%',
                    height: '100%',
                    marginTop: 20
                }}
                value={search}
                onChangeText={(search) => setSearch(search)}
            />

            < ScrollView >
                {cities?.response.map(cityPic)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: '12%',
        height: '12%',
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


