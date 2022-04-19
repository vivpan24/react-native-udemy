import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import profile from '../screens/profile';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return ( 
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};

function MyTab(){
  return(
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name ="Profile" component={profile}  />
      <Tab.Screen name ="Quiz" component={MyStack} options={{headerShown:false}}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
};
export default MyTab;