import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Maps from '../Screens/Maps';
import HomeStack from './HomeStack';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

function BottomNavigation (props) {
    return<>
    <Tab.Navigator
    initialRouteName='HomeStack'
    screenOptions={{
        headerShown:false
    }}
    >
        <Tab.Screen name='HomeStack' component={HomeStack} options={{
            title:'Home',
            tabBarIcon:(p)=><AntDesign color={p.color} size={p.size} name={'home'} />
        }} />
        <Tab.Screen name='User' component={Maps}
        options={{
            title:'Home',
            tabBarIcon:(p)=><Ionicons color={p.color} size={p.size} name={'person-outline'} />
        }}
        />
    </Tab.Navigator>
    </>
}

export default BottomNavigation;