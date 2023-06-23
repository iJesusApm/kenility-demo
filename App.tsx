import 'react-native-gesture-handler'

import React from 'react'

import AppNavigator from './src/navigation/navigator/AppNavigator'
import {DrawerProvider} from './src/context/DrawerContext'

const App = () => {
  return (
    <DrawerProvider>
      <AppNavigator />
    </DrawerProvider>
  )
}

export default App
