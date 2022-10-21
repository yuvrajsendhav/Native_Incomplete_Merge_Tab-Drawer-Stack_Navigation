import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from '../About';
import Contacts from '../Contacts';
import Settings from '../Settings';
import Notification from '../Notification';
import Service from '../Service';
import DrawerNavigator from './DrawerNavigator';
import LoginSecond from '../pages/login/LoginSecond';
import BottomTabNavigator from '../BottomTabNavigator';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginSecond" component={LoginSecond} />
      <Stack.Screen name="Home" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Service" component={Service} />
    </Stack.Navigator>
  );
};
const ContactFun = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Contacts" component={Contacts} />
    </Stack.Navigator>
  );
};
const SettingFun = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  ContactStackNavigator,
  AuthStack,
  ContactFun,
  SettingFun,
};
