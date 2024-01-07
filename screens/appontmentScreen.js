import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const appontmentScreen = ({navigation}) => {
  return (
    <View>
      <Text>appontmentScreen</Text>
      <Button title='Back' onPress={()=>{navigation.navigate('login')}} />
    </View>
  )
}

export default appontmentScreen

const styles = StyleSheet.create({})