import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Contact Screen</Text>
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
export default ContactScreen
