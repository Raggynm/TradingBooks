import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons'

import Home from '../pages/Home';
import MyMarket from '../pages/MyMarket';
import UserProfile from '../pages/UserProfile';
import GraphVis from '../pages/Graph';
import Collection from '../pages/Collection';


const { Navigator, Screen } = createBottomTabNavigator();

function NaviTab() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,

                },
                tabStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,

                },

                labelStyle: {
                    fontFamily: 'RedHatDisplay_400Regular',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#D11749'



            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            < AntDesign
                                name="home"
                                size={size}
                                color={color}
                            />
                        );
                    }
                }}
            />
            <Screen
                name="MyMarket"
                component={MyMarket}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            < AntDesign
                                name="isv"
                                size={size}
                                color={color}
                            />
                        );
                    }
                }}
            />
            <Screen
                name="UserProfile"
                component={UserProfile}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            < AntDesign
                                name="user"
                                size={size}
                                color={color}
                            />
                        );
                    }
                }}
            />

<Screen
                name="Graph"
                component={GraphVis}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            < AntDesign
                                name="sharealt"
                                size={size}
                                color={color}
                            />
                        );
                    }
                }}
            />

<Screen
                name="Collection"
                component={Collection}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            < AntDesign
                                name="book"
                                size={size}
                                color={color}
                            />
                        );
                    }
                }}
            />

        </Navigator>
    );
}

export default NaviTab;