import { Button, ScrollView, View, Text, TouchableOpacity, ImageBackground } from 'react-native'
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
        <ScrollView>
            <Text>Sign Up!</Text>

            <View>

                <TextInput
                    value={name }
                    onChangeText={value => handleOnChangeText(value, 'name')}
                    placeholder='What is your name?'
                />

                <TextInput
                    value={lastName }
                    onChangeText={value => handleOnChangeText(value, 'lastName')}
                    placeholder='What is your Last Name? '
                />

                <TextInput
                    value={ photo}
                    onChangeText={value => handleOnChangeText(value, 'photo')}
                    placeholder='Your picture URL '
                />

                <TextInput
                    value={email }
                    onChangeText={value => handleOnChangeText(value, 'email')}
                    placeholder='What is your email'
                />

                <TextInput
                    value={password}
                    onChangeText={value => handleOnChangeText(value, 'password')}
                    placeholder='****'
                />

            </View>

            <TouchableOpacity
                
                onPress={handleSignUp}>

                    <Text> Sign Up!</Text>

                </TouchableOpacity>

        </ScrollView>
    )
}
