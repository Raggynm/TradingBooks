import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Landing from'../pages/Landing';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ProductPage from '../pages/ProductPage';
import NaviTab from './NaviTab';
import GraphVis from '../pages/Graph';
import Collection from '../pages/Collection';

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Landing} />
                <Screen name="Login" component={Login} />
                <Screen name="SignUp" component={SignUp} />
                <Screen name="ProductPage" component={ProductPage} />
                <Screen name="Home" component={NaviTab} />
                <Screen name="Graph" component={GraphVis} />
                <Screen name="Collection" component={Collection} />
            </Navigator>
        </NavigationContainer>
    )
    
}