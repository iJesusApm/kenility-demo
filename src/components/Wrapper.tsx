import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'

type Props = {
  children: React.ReactNode
}

const Wrapper = ({children}: Props) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Wrapper
