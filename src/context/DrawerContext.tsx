import React, {createContext, useContext} from 'react'
import {useSharedValue, SharedValue} from 'react-native-reanimated'

type DrawerContextType = {
  drawerAnimation: SharedValue<number>
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

export const useDrawerAnimation = () => {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error('useDrawerAnimation must be used within a DrawerProvider')
  }
  return context.drawerAnimation
}

export const DrawerProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const drawerAnimation = useSharedValue(0)

  const value: DrawerContextType = {drawerAnimation}

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
}

export default DrawerContext
