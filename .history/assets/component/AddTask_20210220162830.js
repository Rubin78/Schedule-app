// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  AppRegistry,
} from "react-native";
import { TextInput } from "react-native-paper";
import * as Font from "expo-font";
import Icon from "react-native-vector-icons/Feather";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";
const AddTask = ({ navigation }) => {



    // this.setState = {
    //   country: ["uk"],
    // };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.container}>
        <View style={Styles.imag_with_text}>
          <Text style={Styles.text_inside_image_with_text}>
            CREATE YOUR TASK
          </Text>
        </View>

        <View style={Styles.form}>
          <ScrollView>
            <TextInput
              style={Styles.input}
              underlineColor="#73D5E8"
              label="Task Name"
            />
            <TextInput
              style={Styles.input}
              underlineColor="#73D5E8"
              label=" Task Date"
            />

            <TextInput
              style={Styles.input}
              underlineColor="#73D5E8"
              label=" Task Time"
            />

            <TextInput
              style={Styles.input}
              underlineColor="#73D5E8"
              label="Task Descripton"
            />
            {/* <DropDownPicker
              items={[
                {
                  label: "High",
                  value: "uk",
                
                },
                {
                  label: "Intermediate",
                  value: "intermediate",
                  
                },
                {
                  label: "Low",
                  value: "low",
              
                },
              ]}
              defaultValue={this.state.country}
              containerStyle={{ height: 40 }}
              style={{ backgroundColor: "#fafafa" }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#fafafa" }}
              onChangeItem={(item) =>
                this.setState({
                  country: item.value,
                })
              }
            /> */}
          </ScrollView>
          <View style={Styles.bottom}>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate("TaskListing")}
              style={Styles.submitbutton}
            >
              <Text
                style={{ color: "white", fontSize: 20, textAlign: "center" }}
              >
                Add Task
              </Text>
            </TouchableOpacity> */}

            <Button
              title="Go to First Page"
              onPress={() => navigation.navigate("TaskListing")}
            ></Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};






const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  imag_with_text: {
    flex: 1.8,
    paddingBottom: 20,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  
  form: {
    flex: 7,
    paddingTop: heightPercentageToDP(2.5),
    padding: 10,
  },
  image_inside_image_with_text: {
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(16),
  },
  text_inside_image_with_text: {
    position: "absolute",
    bottom: 0,
    fontSize: 26,
    // fontFamily:'open-sans-Regular' ,
    color: "#777E8B",
  },
  input: {
    margin: heightPercentageToDP(0.6),
    marginTop: 0,
    backgroundColor: "white",
    fontSize: 13.5,
  },

  submitbutton: {
    borderWidth: 2,
    borderColor: "#f7f7f7",
    backgroundColor: "#73D5E8",
    borderRadius: 30,
    width: widthPercentageToDP(55.5),
    height: heightPercentageToDP(8),
    marginBottom: 10,
    justifyContent: "center",
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});


export default AddTask;
