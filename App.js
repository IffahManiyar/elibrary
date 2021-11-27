import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './BottomTabNavigator';


export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <Text>E-LIBRARY APP</Text>
      <BottomTab/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
