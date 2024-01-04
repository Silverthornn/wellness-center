import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'
import homeScreen from './homeScreen'

const bottomTabs = () => {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
        <Tab.Screen name='home' component={homeScreen} options={{
            tabBarIcon: ({ color }) => (
                <Icon name="home-filled" type="material" color={color} size={28} />
              ),}} />
    </Tab.Navigator>
  )
}

export default bottomTabs