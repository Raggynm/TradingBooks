import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Landing from'../pages/Landing';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import NaviTab from './NaviTab';

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Landing} />
                <Screen name="Login" component={Login} />
                <Screen name="SignUp" component={SignUp} />
                <Screen name="Home" component={NaviTab} />
            </Navigator>
        </NavigationContainer>
    )
    
}