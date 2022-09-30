import { View, Text, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { ImageBackground } from 'react-native-web'

export default function ProfileComponent() {

    const user = useSelector((state) => state.logged.userState)

    console.log(user)

  return (

    <View 
    style={{
      width: '90%',
      height:'50%',
      marginVertical: '5%',
      marginHorizontal: '5%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lavender',
      borderRadius: 15,

    }}>

        <Image 
        resizeMode="cover"
        style={{
            width: 300,
            height: 200,
            borderRadius: 15,
            borderColor: '#636fa4',
            borderWidth: 2,
            marginVertical: '2%'

            
        }}
        source={{ uri: user?.photo }} />
        <Text
        style={{
          fontSize: 50,
          padding: 5

        }}> {user?.name} {user?.lastName}</Text>
        
        
        <Text
        style={{
          fontSize: 25,
          padding: 5

        }}> Email: {user?.email}  </Text>

      
    </View>
  )
}