import React from "react";
import { useState } from "react";
import axios from "axios";

import DateTimePicker from "@react-native-community/datetimepicker";

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
import { min } from "react-native-reanimated";
const AddTask = ({ navigation }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [d, setD] = useState('');
  const [t, setT] = useState('');
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    var d = new Date(selectedDate);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var Dates = year + "/" + month + "/" + date;
    setD(Dates);
    var hour = d.getHours();
    var minute = d.getMinutes();
    var sec = d.getSeconds();
    var time = hour + ":" + minute + ":" + sec;
    setT(time);
    hideDatePicker();
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const [taskPriority, setTaskPriority] = useState("");
  // this.setState = {
  //   country: ["uk"],
  // };

  const onPressHandler = () => { 
    const payload = {
      taskName,
      d,
      t,
      taskDesc
    }

    axios.post(
      "https://addschedule-74df8-default-rtdb.firebaseio.com/.json",
      payload
    ).then(res => {
      console.log(res.data)
      navigation.navigate("TaskListing")
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.container}>
        <View style={Styles.Toptextheadermain}>
          <Text style={Styles.Toptextheaderinside}>CREATE YOUR TASK</Text>
        </View>

        <View style={Styles.form}>
          <ScrollView>
            <View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
            <TextInput
              style={Styles.input}
              underlineColor="#73D5E8"
              label="Task Name"
              value={taskName}
              onChangeText={(text) => setTaskName(text)}
            />

            <View style={Styles.Taskdatemain}>
              <View style={Styles.Taskdatedinside}>
                <View style={Styles.buttondate}>
                  <Button onPress={showDatepicker} title="Select date" />
                </View>
              </View>
              <TextInput
                style={Styles.input}
                underlineColor="#73D5E8"
                label=" Task Date"
                value={d}
              />
            </View>

            <View style={Styles.Taskdatemain}>
              <View style={Styles.Taskdatedinside}>
                <View style={Styles.buttondate}>
                  <Button onPress={showTimepicker} title="Select Time" />
                </View>
              </View>
              <TextInput
                style={Styles.input}
                underlineColor="#73D5E8"
                label=" Task Date"
                value={d}
              />
            </View>

            <View style={Styles.buttondate}>
              <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            <TextInput
              style={Styles.input}
              underlineColor="#73D5E8"
              label=" Task Time"
              value={t}
            />

            <TextInput
              style={Styles.input}
              underlineColor="#73D5E8"
              label="Task Descripton"
              value={taskDesc}
              onChangeText={(text) => setTaskDesc(text)}
            />
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
              style={Styles.submitbutton}
              title="Go to First Page"
              onPress={() => onPressHandler()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Toptextheadermain: {
    flex: 1.2,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  form: {
    flex: 7,
    paddingTop: heightPercentageToDP(2.5),
    padding: 10,
  },
  Toptextheaderinside: {
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(16),
  },
  Toptextheaderinside: {
    position: "absolute",
    bottom: 10,
    fontSize: 26,
    // fontFamily:'open-sans-Regular' ,
    color: "#777E8B",
  },
  input: {
    margin: heightPercentageToDP(0.6),
    marginTop: 0,
    backgroundColor: "white",
    fontSize: 13.5,
    flex: 3,
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

  buttondate: {
    backgroundColor: "red",
    height: heightPercentageToDP(7.5),
    justifyContent: "flex-end",
  },

  Taskdatedinside: {
    flex: 2,
    height: heightPercentageToDP(3),
    width: widthPercentageToDP(35),
    backgroundColor: "red",
  },

  Taskdatemain: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});

export default AddTask;
