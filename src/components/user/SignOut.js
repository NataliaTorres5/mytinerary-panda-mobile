import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native";
import { exit } from '../../features/userSlice'
import { useSignOutUserMutation } from '../../features/userAPI'


const width = Dimensions.get("window").width
const height = Dimensions.get("window").height



export default function SignOut() {

    const logged = useSelector((state) => state.logged.loggedState)
    const user = useSelector((state) => state.logged.user)

    const dispatch = useDispatch()
    const [signOut] = useSignOutUserMutation()
    const navigation = useNavigation()


    const signOutUser = () => {

        let email = user?.email

        signOut({ email }).then(response => {
            if (response.data.success) {
                AsyncStorage.removeItem('token')
                dispatch(exit())
                navigation.navigate("SignIn")
            } else {
                console.log(response.error)
            }
        })
            .catch(error => console.log(error))
    }


    return (
        <View style={{
            width: '90%',
            height: '20%',
            marginVertical: '5%',
            marginHorizontal: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lavender',
            borderRadius: 15,

        }}>
 
            <TouchableOpacity
                style={{
                    width: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#636fa4',
                    paddingVertical: '5%',
                    borderRadius: 18,
                }}
                onPress={signOutUser}
            >
                <Text  style={{
                    fontSize: 20,
                    color: '#fff'


                }}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}