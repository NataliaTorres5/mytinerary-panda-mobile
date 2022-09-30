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

