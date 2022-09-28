/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import BottomTabNavigator from './src/navigator/BottomTabNavigator';
import NewsDetailScreen from './src/screens/NewsDetailScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetailScreen}
            options={({ route }) =>({
              headerTitle: route?.params?.news?.title,
              headerStyle: {backgroundColor: 'dodgerblue'},
              headerTintColor: '#fff',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
