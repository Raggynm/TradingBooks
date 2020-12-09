import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ProductPage from '../pages/ProductPage';
import NaviTab from './NaviTab';
import GraphVis from '../pages/Graph';
import Collection from '../pages/Collection';
import RegisterBook from '../pages/RegisterBook';
import AuthContext from '../services/auth/authContext';
import RegisterStore from '../pages/RegisterStore';
import MyMarket from '../pages/MyMarket';
import CreateAnnounce from '../pages/CreateAnnounce';
import MakeProposal from '../pages/MakeProposal';

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {

    const { signed } = useContext(AuthContext)

    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                {signed ?
                    <>
                        <Screen name="Home" component={NaviTab} />
                        <Screen name="MyMarket" component={MyMarket} />
                        <Screen name="ProductPage" component={ProductPage} />
                        <Screen name="Graph" component={GraphVis} />
                        <Screen name="Collection" component={Collection} />
                        <Screen name="RegisterBook" component={RegisterBook} />
                        <Screen name="RegisterStore" component={RegisterStore} />
                        <Screen name="CreateAnnounce" component={CreateAnnounce} />
                        <Screen name="MakeProposal" component={MakeProposal} />
                    </>
                    :
                    <>
                        <Screen name="Landing" component={Landing} />
                        <Screen name="SignIn" component={SignIn} />
                        <Screen name="SignUp" component={SignUp} />
                    </>
                }


            </Navigator>
        </NavigationContainer>
    )

}