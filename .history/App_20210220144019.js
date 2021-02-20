import "react-native-gesture-handler";

import * as React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AddTask from "./assets/component/AddTask";
import TaskListing from "./assets/component/TaskListing";
import Calender from "./assets/component/Calender";

// Import Custom Sidebar
import CustomSidebarMenu from "./assets/CustomSidebarMenu";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="AddTask">
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{
          title: "Add Task ", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (


    <Stack.Navigator
      initialRouteName="TaskListing"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#f4511e", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >


      <Stack.Screen
        name="TaskListing"
        component={TaskListing}
        options={{
          title: "TaskListing", //Set Header Title
        }}
      />


      <Stack.Screen
        name="Calender"
        component={Calender}
        options={{
          title: "Calender", //Set Header Title
        }}
      />
    </Stack.Navigator>


  );
}

function App() {

  return (


    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="AddTask"
          options={{ drawerLabel: "ADD Task" }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="TaskDisplay"
          options={{ drawerLabel: "Task Listing" }}
          component={secondScreenStack}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
