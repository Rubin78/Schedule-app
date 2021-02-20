import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from "react-native-navigation";
import { RNNDrawer } from "react-native-navigation-drawer-extension";
import { Navigation } from "react-native-navigation";
import { RNNDrawer } from "react-native-navigation-drawer-extension";


export default function App() {



  RNNDrawer.showDrawer({
    component: {
      name: "CustomDrawer",
      passProps: {
        animationOpenTime: 300,
        animationCloseTime: 300,
        direction: "left",
        dismissWhenTouchOutside: true,
        fadeOpacity: 0.6,
        drawerScreenWidth: "75%" || 445, // Use relative to screen '%' or absolute
        drawerScreenHeight: "100%" || 700,
        style: {
          // Styles the drawer container, supports any react-native style
          backgroundColor: "red",
        },
        parentComponentId: props.componentId, // Custom prop, will be available in your custom drawer component props
      },
    },
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
