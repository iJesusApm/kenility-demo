import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

type Props = {
  label: string
  active: boolean
  handlePress: () => void
}

const DrawerItem = ({label, active, handlePress}: Props) => {
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.mainContainer, active && styles.activeContainer]}>
      <Text style={[styles.label, active && styles.activeText]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1F1B33',
    paddingLeft: 24,
    paddingVertical: 16,
    borderRadius: 10,
    marginVertical: 8,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  activeContainer: {
    backgroundColor: '#FC807433',
  },
  activeText: {
    color: '#FC8074',
  },
})

export default DrawerItem
