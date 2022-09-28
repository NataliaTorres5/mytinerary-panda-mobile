import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function Home() {

  return (
   < View>

    <Text>hello</Text>
    
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
