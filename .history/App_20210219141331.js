import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { dimensions } from "react-native";
import { feather } from "@expo/vector-icons";
import { ProfileScreen, message, Activity, list } from "./assets";




const DrawerNavigator =createDrawerNavigator({


  ProfileScreen,
  message,
  Activity,
  list
})


export default createAppContainer(DrawerNavigator);