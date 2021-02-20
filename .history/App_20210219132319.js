import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const SideMenu = require("react-native-side-menu");

export default function App() {

  const SideMenu = require("react-native-side-menu");

  return (
    <View style={styles.container}>
      <Text >Welcome to React Native!</Text>
      <Text>To get started, edit index.ios.js</Text>
      <Text >
        Press Cmd+R to reload,{"\n"}
        Cmd+Control+Z for dev menu
      </Text>
      <SideMenu menu={menu}>
        <ContentView />
      </SideMenu>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
