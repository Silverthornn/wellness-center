import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/themed'
import homeScreen from './homeScreen'
import settingScreen from './settingScreen'

const bottomTabs = () => {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='home' screenOptions={{headerShown: false}}>
        <Tab.Screen name='Home' component={homeScreen} options={{
            tabBarIcon: ({ color }) => (
                <Icon name="home" type="material" color={color} size={28} />
              ),}} />
        <Tab.Screen name='Settings' component={settingScreen} options={{
            tabBarIcon: ({ color }) => (
                <Icon name='person' type='material' color={color} size={28} />
              ),}} />
    <Tab.Screen name='Appointments' component={settingScreen} options={{
            tabBarIcon: ({ color }) => (
                <Icon name='person' type='material' color={color} size={28} />
              ),}} />
    </Tab.Navigator>
  )
}

export default bottomTabs