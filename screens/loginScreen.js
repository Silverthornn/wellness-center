import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const loginScreen = ({navigation}) => {
  return (
    <View>
      <Text>loginScreen</Text>
      <Button title='Sign Up' onPress={()=>{navigation.navigate('signup')}}/>
      <Button title='Next' onPress={()=>{navigation.navigate('bottomTabs')}}/>
    </View>
  )
}

export default loginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})