// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";


const TaskListing = ({ navigation }) => {


  state = {
    text: "",
  };
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
            This is Tasklisting
          </Text>
          <Button
            title="Go to First Page"
            onPress={() => navigation.navigate("FirstPage")}
          />
          <Button
            title="Go to Third Page"
            onPress={() => navigation.navigate("ThirdPage")}
          />
        </View>
        <Text style={{ fontSize: 18, textAlign: "center", color: "grey" }}>
          Custom React Navigate Drawer
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TaskListing;
