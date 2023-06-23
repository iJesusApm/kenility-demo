import 'react-native-gesture-handler'

import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import ScreenOne from '../../screens/ScreenOne'
import ScreenTwo from '../../screens/ScreenTwo'
import ContactScreen from '../../screens/Contact'
import {TabNavigator} from './Root'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Start"
          component={TabNavigator}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Screen One"
          component={ScreenOne}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Screen Two"
          component={ScreenTwo}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
