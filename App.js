// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import welcomScreen from './screens/welcomScreen';
import loginScreen from './screens/loginScreen';
import signUpScreen from './screens/signUpScreen';
import bottomTabs from './screens/bottomTabs';
import doctorSignUp from './screens/doctorSignUp';

export default function App({navigation}) {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome" component={welcomScreen}/>
        <Stack.Screen name="login" component={loginScreen}/>
        <Stack.Screen name="signup" component={signUpScreen}/>
        <Stack.Screen name="bottomTabs" component={bottomTabs} />
        <Stack.Screen name="doctorsignup" component={doctorSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
