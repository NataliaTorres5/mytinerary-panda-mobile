import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DetailCard from '../components/detailCard/DetailCard'
import Details from '../screen/Details'
//import UnderConstruction from '../screen/UnderConstruction'
import Home from '../screen/Home'
import Cities from '../screen/Cities'
import Stack from './Stack'

const DrawerNav = createDrawerNavigator()

export default function Drawer() {


    return (
        <DrawerNav.Navigator>
            <DrawerNav.Screen name='Home' component={Home} />
            <DrawerNav.Screen name='Cities' component={Stack} />
            {/* <DrawerNav.Screen name='UnderConstruction' component={UnderConstruction} /> */}
        </DrawerNav.Navigator>
    )
}