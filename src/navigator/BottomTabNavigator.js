/* eslint-disable prettier/prettier */
import React from 'react';
import LatestScreen from '../screens/LatestScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CategoriesNavigator from './CategoriesNavigator';
import BookmarksScreen from '../screens/BookmarksScreen';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Entypo size={size} color={color} name="home" />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Latest"
        component={LatestScreen}
        options={{
          headerStyle: {backgroundColor: 'dodgerblue'},
          headerTintColor:'#fff',
          tabBarIcon: ({color, focused, size}) => (
            <Entypo size={size} color={color} name="news" />
          ),
        }}
      />
       <Tab.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={{
          headerStyle: {backgroundColor: 'dodgerblue'},
          headerTintColor:'#fff',
          tabBarIcon: ({color, focused, size}) => (
            <Entypo size={size} color={color} name="bookmark" />
          ),
        }}
      />
      <Tab.Screen
        name="CategoriesNavigator"
        component={CategoriesNavigator}
        options={{
          headerShown: false,
          
          tabBarIcon: ({color, focused, size}) => (
            <MaterialIcons size={size} color={color} name="category" />
          ),
          title:'Categories',
          headerStyle: {backgroundColor: 'dodgerblue'},
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
