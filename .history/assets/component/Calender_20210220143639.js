// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";

const Calender = ({ navigation }) => {
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
            This is Calender
          </Text>
          <Button
            onPress={() => navigation.navigate("TaskListing")}
            title="Go to First Page"
          />
          <Button
            onPress={() => navigation.navigate("AddTask")}
            title="Go to Second Page"
          />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default Calender;
