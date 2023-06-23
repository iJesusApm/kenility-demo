import React, {useCallback} from 'react'
import Animated from 'react-native-reanimated'
import {TouchableOpacity, StyleSheet, Text, Dimensions, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Feather'

import {Easing, interpolate, useAnimatedStyle, useDerivedValue, withTiming} from 'react-native-reanimated'
import {useDrawerAnimation} from '../context/DrawerContext'
import Drawer from './Drawer'

type Props = {
  children: React.ReactNode
}

const {width} = Dimensions.get('window')

const config = {
  duration: 500,
  easing: Easing.bezier(0.5, 0.01, 0, 1),
}

const Wrapper = ({children}: Props) => {
  const drawerAnimation = useDrawerAnimation()
  const transition = useDerivedValue(() => withTiming(drawerAnimation.value, config))

  const screenStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {rotateZ: `${interpolate(transition.value, [0, 1], [0, -8])}deg`},
        {translateX: interpolate(transition.value, [0, 1], [0, width / 1.6])},
        {translateY: interpolate(transition.value, [0, 1], [0, 100])},
      ],
      borderRadius: interpolate(transition.value, [0, 1], [0, 40]),
    }
  })

  const drawerContentStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: interpolate(transition.value, [0, 1], [0, 50])}],
      borderTopLeftRadius: interpolate(transition.value, [0, 1], [0, 40]),
    }
  })

  const handleDrawerPress = useCallback(() => {
    drawerAnimation.value = 0
  }, [drawerAnimation.value])

  const handlePress = () => {
    drawerAnimation.value = +!drawerAnimation.value
  }

  return (
    <View style={styles.safeArea}>
      <Drawer style={drawerContentStyle} onPress={handleDrawerPress} />
      <Animated.View style={[styles.mainContainer, screenStyle]}>
        <SafeAreaView>
          <View style={styles.header}>
            <TouchableOpacity style={styles.btn} onPress={handlePress}>
              <Icon name="menu" size={24} color="#E8E5E5" />
            </TouchableOpacity>
            <Text style={styles.textStyle}>Start</Text>
          </View>
          <View style={styles.children}>{children}</View>
        </SafeAreaView>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 24,
  },
  btn: {
    marginHorizontal: 36,
  },
  textStyle: {
    color: '#9F9FA0',
    fontSize: 24,
    letterSpacing: 5,
    lineHeight: 33,
    textTransform: 'uppercase',
  },
  children: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Wrapper
