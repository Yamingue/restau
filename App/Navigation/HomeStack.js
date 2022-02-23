import { createStackNavigator } from '@react-navigation/stack';
import React, { PureComponent } from 'react'
import Detail from '../Screens/Details';
import Home from '../Screens/Home';
import Maps from '../Screens/Maps';

const Stack = createStackNavigator()
function HomeStack (props) {
    return<>
    <Stack.Navigator
        initialRouteName='Home'
    >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
    </>
}

export default HomeStack;