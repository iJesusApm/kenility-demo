import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from '../../screens/Home'
import ScreenOne from '../../screens/ScreenOne'
import ScreenTwo from '../../screens/ScreenTwo'
import ContactScreen from '../../screens/Contact'

import {SCREENS_ROUTES} from '../constants'
import Wrapper from '../../components/Wrapper'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const options = {
  headerShown: false,
}

export const HomeStack = () => (
  <Stack.Navigator initialRouteName={SCREENS_ROUTES.HOME} screenOptions={options}>
    <Stack.Screen
      name={SCREENS_ROUTES.HOME}
      component={HomeScreen}
      options={{
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name={SCREENS_ROUTES.SCREEN_ONE}
      component={ScreenOne}
      options={{
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name={SCREENS_ROUTES.SCREEN_TWO}
      component={ScreenTwo}
      options={{
        animationEnabled: false,
      }}
    />
  </Stack.Navigator>
)

export const TabNavigator = () => {
  return (
    <Wrapper>
      <Tab.Navigator
        initialRouteName={SCREENS_ROUTES.HOME}
        screenOptions={{
          ...options,
          tabBarStyle: {height: 60},
          tabBarActiveTintColor: '#FC8074',
          tabBarInactiveTintColor: '#1F1B33',
          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}>
        <Tab.Screen
          name={SCREENS_ROUTES.HOME}
          component={HomeStack}
          options={{
            tabBarIcon: () => null,
          }}
        />
        <Tab.Screen
          name={SCREENS_ROUTES.CONTACT}
          component={ContactScreen}
          options={{
            tabBarIcon: () => null,
          }}
        />
      </Tab.Navigator>
    </Wrapper>
  )
}
