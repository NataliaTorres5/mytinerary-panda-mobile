import { View, Text, Image } from 'react-native'
import React from 'react'
import { useGetAllCommentsMutation } from '../../../features/commentsAPI'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function AllComments(props) {

    const recharge = useSelector((state) => state.recharge.rechargeState)
    const user = useSelector((state) => state.logged.userState)

    const dispatch = useDispatch()

    const [getAllComments] = useGetAllCommentsMutation()
    const [comments, setComments] = useState([])

    console.log(comments)


    async function getallComments() {

        console.log('hola');
        try {
            let res = await getAllComments(props.id)
            if (res.data?.success) {
                console.log(res.data);
                setComments(res.data.response)
            } else {
                console.log(res.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getallComments()
    }, [recharge])

    const commentPic = (item) => (

        <View
        style={{
            flexDirection: 'row',
        }}>

            <Image
            style={{
                height: 40,
                width: 40,
                padding:'3%',
                borderRadius: 20,
            }}
            resizeMode="cover"
             source={{ uri: item.user.photo }}/>

             <View
             style={{
                padding: '2%',
                margin: '2%',
                backgroundColor: '#fff',
                borderRadius: 20
             }}>

            <Text
            
            style={{
                width:200,

            }}> {item.user.name} </Text>
            <Text
            style={{
                width:150,
                padding:'3%'
            }}>  {item.comment} </Text>

            </View>

        </View>
    )


    return (
        <View>
            {comments?.map(commentPic)}
        </View>
    )
}