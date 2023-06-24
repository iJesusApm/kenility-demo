import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const ScreenTwo = () => {
  return (
    <View style={styles.container}>
      <Text>Screen Two</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default ScreenTwo
