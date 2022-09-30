import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function SignInProfile() {

    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity
                
                onPress={() => navigation.navigate("SignIn",)}>
                <Text>Sign In here!</Text>
            </TouchableOpacity>
    </View>
  )
}