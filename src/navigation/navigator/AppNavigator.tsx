import 'react-native-gesture-handler'

import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
