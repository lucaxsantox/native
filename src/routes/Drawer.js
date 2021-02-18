import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import TelaA from '../Views/TelaA'
import TelaB from '../Views/TelaB'
import TelaC from '../Views/TelaC'

const routeDrawer = createDrawerNavigator()

const Drawer = () => {
    return (
    <routeDrawer.Navigator initialRouteName="Home">
        <routeDrawer.Screen name="Home" component={TelaA}/>
        <routeDrawer.Screen name="Produtos" component={TelaB}/>
        <routeDrawer.Screen name="Nossas Lojas" component={TelaC}/>
    </routeDrawer.Navigator>        
    )
}

export default Drawer
