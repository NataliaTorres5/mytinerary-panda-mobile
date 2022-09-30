import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CarouselHome from '../components/CarouselHome'
import LandingHome  from '../components/LandingHome';
import UnderConstruction from '../screen/UnderConstruction'


export default function Home() {

  return (
   < View>
    <CarouselHome/>
    <LandingHome/>
   </View>
  
  )
}
//<UnderConstruction/>

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    });
