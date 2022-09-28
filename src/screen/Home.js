import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LandingHome  from '../components/LandingHome';

export default function Home() {

  return (
   < View>
    <LandingHome/>
   </View>
  
  )
}

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
