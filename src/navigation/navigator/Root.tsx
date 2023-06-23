import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from '../../screens/Home'
import ScreenOne from '../../screens/ScreenOne'
import ScreenTwo from '../../screens/ScreenTwo'
import ContactScreen from '../../screens/Contact'

import {SCREENS_ROUTES} from '../constants'

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const options = {
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerShown: false,
}

const HomeStack = () => (
  <Stack.Navigator initialRouteName={SCREENS_ROUTES.HOME} screenOptions={options}>
    <Stack.Screen name={SCREENS_ROUTES.HOME} component={HomeScreen} />
    <Stack.Screen name={SCREENS_ROUTES.SCREEN_ONE} component={ScreenOne} />
    <Stack.Screen name={SCREENS_ROUTES.SCREEN_TWO} component={ScreenTwo} />
  </Stack.Navigator>
)

const TabNavigator = () => (
  <Tab.Navigator screenOptions={options}>
    <Tab.Screen name={SCREENS_ROUTES.HOME} component={HomeStack} />
    <Tab.Screen name={SCREENS_ROUTES.CONTACT} component={ContactScreen} />
  </Tab.Navigator>
)

const AppNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Start" component={TabNavigator} />
      <Drawer.Screen name="Screen One" component={ScreenOne} />
      <Drawer.Screen name="Screen Two" component={ScreenTwo} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
)

export default AppNavigator
