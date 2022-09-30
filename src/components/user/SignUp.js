import {  Image,View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { useSignUpUserMutation } from '../../features/userAPI'
import { useDispatch } from 'react-redux';


export default function SignUp({ navigation }) {

    const [signUpUser] = useSignUpUserMutation()
    const dispatch = useDispatch()

    const [userInfo, setUserInfo] = useState({
        name: '',
        lastName: '',
        photo: '',
        email: '',
        password: '',
        from: "form",
        role: 'user'

    });

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value });
    };

    const { name, lastName, photo, email, password } = userInfo;

    const handleSignUp = async () => {
        signUpUser(userInfo)
            .then((res) => {
                if (res.error) {
                    let dataError = res.error;
                    let dataMessage = dataError.data;

                } else {

                    let dataResponse = res.data;
                    let dataSuccess = dataResponse.message;

                }
            })
            .catch((error) => {
                console.log(error);
            });

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
                

            <View
                style={{
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
                    value={name}
                    onChangeText={value => handleOnChangeText(value, 'name')}
                    placeholder='What is your name?'
                />

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
                    value={lastName}
                    onChangeText={value => handleOnChangeText(value, 'lastName')}
                    placeholder='What is your Last Name? '
                />

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
                    value={photo}
                    onChangeText={value => handleOnChangeText(value, 'photo')}
                    placeholder='Your picture URL '
                />

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
                    value={email}
                    onChangeText={value => handleOnChangeText(value, 'email')}
                    placeholder='What is your email'
                />

                <TextInput
                 style={{
                    width: 300,
                    height:50,
                    justifyContent:'center',
                    textAlign: 'center',
                    paddingVertical: 5,
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    marginVertical: '2%',

                }}
                    value={password}
                    onChangeText={value => handleOnChangeText(value, 'password')}
                    placeholder='****'
                />

                <TouchableOpacity
                  style={{
                    width: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#636fa4',
                    paddingVertical: '5%',
                    borderRadius: 18,
                    marginVertical: '5%',
                }}

                    onPress={handleSignUp}>

                    <Text
                    style={{
                        fontSize: 20,
                        color: '#fff'
                    }}> Sign Up!</Text>

                </TouchableOpacity>


            </View>


        </View>
    )
}
