import { View, Text , FlatList, Animated, Image,StyleSheet,SafeAreaView, Dimensions} from 'react-native'
import React, { useState, useRef } from 'react'
import { useGetAllCitiesQuery } from '../features/citiesAPI'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const espacioCarousel = width * 0.7;
const espacioContenedor = (width - espacioCarousel) / 2;
const espacio = 10;


export default function CarouselHome() {

    const citiesString = ''
    const scrollX = useRef(new Animated.Value(0)).current;
    const { data: cities } = useGetAllCitiesQuery(citiesString);

    const carouselCities = cities?.response;

    
    console.log(carouselCities?.length)
  return (
    <SafeAreaView style={{
        width: "100%",
        height: "100%",
        
      }}>
      <Animated.FlatList
       onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
    )}
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    snapToAlignment="start"
    contentContainerStyle={{
        paddingTop: 60,
        marginHorizontal: espacioContenedor
    }}
    snapToInterval={espacioCarousel}
    decelerationRate={0}
    scrollEventThrottle={16}
    data={carouselCities}

    keyExtractor={(item) => item._id}
    
    renderItem={({item,index}) =>{

        let photo = item.photo;

        const inputRange = [
            (index -1) * espacioCarousel,
            index * espacioCarousel,
            (index+1) * espacioCarousel
        ];
        const outputRange = [0, -50, 0];
        const scrollY = scrollX.interpolate({
            inputRange,
            outputRange
        })
        return (
            <View style={{width: espacioCarousel}}>
                <Animated.View
                style={{
                    marginHorizontal: espacio,
                    padding: espacio,
                    borderRadius: 34,
                    backgroundColor: '#636fa4',
                    alignItems: 'center',
                    transform: [{ translateY: scrollY }],
                }}
                >
                  <Image source={{ uri: photo }} style={{
                    height: 100,
                    width: "100%",
                    height: espacioCarousel *1.2,
                    resizeMode: "cover",
                    borderRadius: 24,
                    margin: 0,
                    marinBottom: 10,
                  }} />  
                </Animated.View>
            </View>
        )
    }}
      />
    </SafeAreaView>
  )
}




