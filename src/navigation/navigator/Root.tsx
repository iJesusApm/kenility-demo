import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from '../../screens/Home'
import ScreenOne from '../../screens/ScreenOne'
import ScreenTwo from '../../screens/ScreenTwo'
import ContactScreen from '../../screens/Contact'

import {SCREENS_ROUTES} from '../constants'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const options = {
  headerShown: false,
}

export const HomeStack = () => (
  <Stack.Navigator initialRouteName={SCREENS_ROUTES.HOME} screenOptions={options}>
    <Stack.Screen name={SCREENS_ROUTES.HOME} component={HomeScreen} />
    <Stack.Screen name={SCREENS_ROUTES.SCREEN_ONE} component={ScreenOne} />
    <Stack.Screen name={SCREENS_ROUTES.SCREEN_TWO} component={ScreenTwo} />
  </Stack.Navigator>
)

export const TabNavigator = () => (
  <Tab.Navigator screenOptions={options}>
    <Tab.Screen
      name={SCREENS_ROUTES.HOME}
      component={HomeStack}
      options={{
        tabBarIcon: () => null, // Ocultar el icono de la pestaña
      }}
    />
    <Tab.Screen
      name={SCREENS_ROUTES.CONTACT}
      component={ContactScreen}
      options={{
        tabBarIcon: () => null, // Ocultar el icono de la pestaña
      }}
    />
  </Tab.Navigator>
)
