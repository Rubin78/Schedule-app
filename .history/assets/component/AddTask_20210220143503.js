// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";

const AddTask = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            This is the First Page under First Page Option
          </Text>
          <Button
            onPress={() => navigation.navigate("SecondPage")}
            title="Go to Second Page"
          />
          <Button
            onPress={() => navigation.navigate("ThirdPage")}
            title="Go to Third Page"
          />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default AddTask;
