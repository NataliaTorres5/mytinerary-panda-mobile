import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileComponent from '../components/ProfileComponent'
import SignOutComponent from '../components/user/SignOut'
import SignInProfile from '../components/user/SignInProfile'

export default function Profile() {

  const logged = useSelector((state) => state.logged.loggedState)
  const user = useSelector((state) => state.logged.userState)

  return (<View
  
  style={{
    width: '100%',
    height: '100%',
    backgroundColor: '#636fa4',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <ProfileComponent/>
    <SignOutComponent/>

  </View>)
    
  
}