import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const welcomScreen = ({navigation}) => {
  return (
    <View>
      <Text>welcomScreen</Text>
    </View>
  )
}

export default welcomScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'brown',
        alignItems: 'center',
        justifyContent: 'center',
      },
})