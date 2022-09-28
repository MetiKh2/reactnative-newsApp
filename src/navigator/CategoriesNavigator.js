/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './../screens/CategoriesScreen';
import NewsCategoryScreen from '../screens/NewsCategoryScreen';

const Stack = createStackNavigator();
export default function CategoriesNavigator() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Categories" component={CategoriesScreen} options={{  headerStyle: {backgroundColor: 'dodgerblue'},headerTintColor:'white'}}/>
    <Stack.Screen name="NewsCategory" component={NewsCategoryScreen} options={({ route }) =>({   headerTitle: route?.params?.category,headerTintColor:'#fff',headerStyle: {backgroundColor: 'dodgerblue'}})} />
  </Stack.Navigator>
  )
}