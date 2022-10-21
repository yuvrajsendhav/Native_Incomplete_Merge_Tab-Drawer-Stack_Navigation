import React from 'react';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import About from '../About';
import Home from '../Home';
import Notification from '../Notification';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Icon name="home" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="account-details"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          title: 'Notification',
          drawerIcon: ({focused, size}) => (
            <Icon name="bell" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
