// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/




import * as React from "react";
import { Button, View, Text, SafeAreaView, AppRegistry } from "react-native";

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
            This is calender
          </Text>
          <Button
            onPress={() => navigation.navigate("TaskListing")}
            title="TaskListing"
          />
          
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default Calender;
