import { View, Text, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ProfileComponent() {

    const user = useSelector((state) => state.logged.userState)

    console.log(user)

  return (

    <View>

        <Image 
        resizeMode="cover"
        style={{
            width: 12,
            height: 12
        }}
        source={{ uri: user?.photo }} />
        <Text> {user?.name} {user?.lastName}</Text>
        
        
        <Text> {user?.email}  </Text>

      
    </View>
  )
}