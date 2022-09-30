import { Button, ScrollView, View, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { useSignInUserMutation } from '../../features/userAPI'
import { controlReducer } from '../../features/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function SignIn({ navigation }) {

    const [signInUser] = useSignInUserMutation()
    const dispatch = useDispatch()

    const [userInfo, setUserInfo] = useState(
        {
            email: '',
            password: '',
            from: 'form'
        }
    );

    const { email, password } = userInfo;

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value })
    }

    const handleSignIn = async () => {

        signInUser(userInfo)
            .then((res) => {
                if (res.error) {
                    let dataError = res.error;
                    let dataMessage = dataError.data;

                } else {

                    let dataResponse = res.data;
                    let dataSuccess = dataResponse.message;
                    dispatch(controlReducer(res.data.response.user))

                    AsyncStorage.setItem('token', JSON.stringify(res.data.response.token))
                }
            })
            .catch((error) => {
                console.log(error);
            });

        const myToken = await AsyncStorage.getItem('token')

        setUserInfo({
            email: '',
            password: '',
            from: "form"


        })
    }


    return (
        <ScrollView>
            <Text>SignIn</Text>

            <TextInput value={email}
                onChangeText={value => handleOnChangeText(value, 'email')}
                label='Email'
                placeholder='Put your email here' />


            <TextInput value={password}
                onChangeText={value => handleOnChangeText(value, 'password')}
                label='Password'
                placeholder='****' />


                <TouchableOpacity
                
                onPress={handleSignIn}
                
                >

                    <Text> Log In!</Text>

                </TouchableOpacity>



        </ScrollView>
    )
}