import { View, Text , FlatList, Animated, Image,SafeAreaView, Dimensions} from 'react-native'
import React, { useState, useRef } from 'react'
import { useGetAllCitiesQuery } from '../features/citiesAPI'



const width = Dimensions.get("Window").width;
const height = Dimensions.get("Window").height;

const espacioCarousel = width * 0.7;
const espacio = 10;


export default function CarouselHome() {
    
    const [mySearch, setMySearch] = useState("")
    const { data: cities } = useGetAllCitiesQuery(mySearch)
    const carouselCities = cities?.response;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={({ item, index }) =>{

        let photo = item.photo
        let city = item.city

        return(
            <View style={{width: espacioCarousel
            }}>
                <View style={{
                    marginHorizontal: espacio,
                    padding: espacio,
                    borderRadius: 34,
                    backgroundColor:"pink",
                    alignItems: "center",
                }}>
                    <Text style={{
                                    color: 'aliceblue',
                                    fontWeight: 'bold',
                                    paddingBottom: 5,
                                    fontSize:20
                                }}> {city} </Text>
                    <Image source={{ uri: photo }} style={styles.citie} />
                </View>
            </View>
        )
      }}
       />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alingnItems: "center",
        justifyContent: "center"
    },
    cities: {
        width: "100%",
        height: espacioCarousel *1.2,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
        marinBottom: 10,
    }
})