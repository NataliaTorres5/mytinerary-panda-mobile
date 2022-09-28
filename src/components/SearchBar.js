import { View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function SearchBar(props) {


  return (
    <View>
      <TextInput 
      value={props.value}
      placeholder="Look for a city" 
      onChangeText={props.onChangeText}  />
    </View>
  )
}