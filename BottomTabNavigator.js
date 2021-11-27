import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TransactionScreen from '../screens/Transaction';
import SearchScreen from '../screens/Search';

const Tab=createBottomTabNavigator();
export default class BottomTab extends React.Component{
    render(){
        return(
          <NavigationContainer>
              <Tab.Navigator>
                  <Tab.Screen name='Transaction' Component={TransactionScreen}></Tab.Screen>
                  <Tab.Screen name='Search' Component={SearchScreen}></Tab.Screen>
              </Tab.Navigator>
          </NavigationContainer>
        );
    }

}