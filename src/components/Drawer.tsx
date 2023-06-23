import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import Animated from 'react-native-reanimated'

import {useNavigation} from '@react-navigation/native'

import DrawerItem from './DrawerItem'
import {SCREENS_ROUTES} from '../navigation/constants'

const navigationState = [
  {id: 1, label: 'Start', route: SCREENS_ROUTES.HOME},
  {id: 2, label: 'Screen One', route: SCREENS_ROUTES.SCREEN_ONE},
  {id: 3, label: 'Screen Two', route: SCREENS_ROUTES.SCREEN_TWO},
  {id: 4, label: 'Contacts', route: SCREENS_ROUTES.CONTACT},
]

type Props = {
  onPress: () => void
  style: {
    transform: {
      translateY: number
    }[]
    borderTopLeftRadius: number
  }
}

const Drawer = ({style, onPress}: Props) => {
  const navigation = useNavigation()

  return (
    <Animated.View style={[styles.mainContainer, style]}>
      <Text style={styles.titleText}>Beka</Text>

      {navigationState.map(({id, label, route}) => (
        <DrawerItem
          key={id}
          active={id === 1}
          handlePress={() => {
            onPress()
            navigation.navigate(route)
          }}
          label={label}
        />
      ))}
      <View style={styles.line} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: '#1F1B33',
    paddingRight: '50%',
    paddingTop: '25%',
    paddingLeft: 24,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#84818E',
    marginTop: 80,
  },
})

export default Drawer
