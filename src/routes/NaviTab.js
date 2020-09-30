import React from 'rect';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../pages/Home';
import MyMarket from '../pages/MyMarket';

const { Navigator, Screen} = createBottomTabNavigator();

function NaviTab() {
    return(
        <Navigator>
            <Screen name="Home" component={Home} />
            <Screen name="MyMarket" component={MyMarket} />
        </Navigator>
    );
}

export default NaviTab;