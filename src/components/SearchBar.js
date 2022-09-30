import { View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function SearchBar(props) {


  return (
    <View style={{
      width: '100%',
      marginTop: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backGroundColor: 'blue'
  }}>
      <TextInput  
       style={{
        width: 300,
        height:50,
        justifyContent:'center',
        textAlign: 'center',
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginVertical: '2%'

    }}
      value={props.value}
      placeholder="Look for a city" 
      onChangeText={props.onChangeText}  />
    </View>
  )
}