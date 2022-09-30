import { Image, View, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native'
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
        <View
        style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#636fa4',

        }}>
            <View style={{
                    width: '90%',
                    height: '90%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'lavender',
                    borderRadius: 15,

                }}>
                     <Image
                style={{
                    width: 200,
                    height:200,
                }}
                source={{uri: 'https://i.im.ge/2022/09/30/1cTGzK.Icon.png'}}  />



            <TextInput value={email}
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
                onChangeText={value => handleOnChangeText(value, 'email')}
                label='Email'
                placeholder='Put your email here' />


            <TextInput value={password}
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
                onChangeText={value => handleOnChangeText(value, 'password')}
                label='Password'
                placeholder='****' />


                <TouchableOpacity  style={{
                    width: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#636fa4',
                    paddingVertical: '5%',
                    borderRadius: 18,
                    marginVertical: '5%',
                }}
                
                onPress={handleSignIn}
                
                >

                    <Text
                    
                    style={{
                        fontSize: 20,
                        color: '#fff'
                    }}> Log In!</Text>

                </TouchableOpacity>

                </View>



        </View>
    )
}