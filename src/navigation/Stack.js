import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cities from '../screen/Cities'
import Details from '../screen/Details'

export default function Stack() {
const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='Cities'>
       <Stack.Screen options={{
        headerShown: false,
       }} name='City' component={Cities} />
       <Stack.Screen options={{
        headerShown: false,
       }} name='Details' component={Details} />
    </Stack.Navigator>
  )
}