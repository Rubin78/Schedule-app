import React, { Component, useState, useEffect } from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";

const TaskListing = ({ navigation }) => {
  const [task, setTask] = useState();
  const [taskListingData, setTaskListingData] = useState({});
  useEffect(() => {
    axios
      .get("https://addschedule-74df8-default-rtdb.firebaseio.com/.json")
      .then((res) => {
        setTaskListingData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTask = () => {
    setTask("ok");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerinside}>
        <ScrollView>
          <View style={styles.main}>
            <View style={styles.buttonmain}>
              <Button
                title="Add Task"
                onPress={() => navigation.navigate("AddTask")}
              />
            </View>
          </View>

          {taskListingData &&
            Object.entries(taskListingData).map((task) => (
              <>
                {task.map((item) => (
                  <View style={styles.card}>
                    <View
                      style={{
                        flexDirection: "row-reverse",
                        margin: 24,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          flex: 1.2,
                        }}
                      >
                        <Text style={styles.tasknamemian}>
                          Task Name : {item.taskName}
                        </Text>
                        <Text
                          style={{
                            color: "#B2DDc1",
                            fontSize: 15,
                            padding: 4,
                          }}
                        >
                          Date: {item.d}
                        </Text>
                        <Text
                          style={{
                            color: "silver",
                            fontSize: 15,
                            padding: 5,
                          }}
                        >
                          Time : {item.t}
                        </Text>
                        <Text
                          style={{
                            color: "silver",
                            fontSize: 14,
                            padding: 4,
                          }}
                        >
                          Description : {item.taskDesc}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </>

              // <View>
              //       <Text>{JSON.stringify(taskListingData)}</Text>
              //       </View>
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  containerinside: { marginTop: 0, padding: 5 },
  main: {
    flex: 1,
    height: heightPercentageToDP(10),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
  },

  buttonmain: {
    flex: 1,
    width: widthPercentageToDP(25),
    flexDirection: "row-reverse",
    paddingRight: 20,
  },
  card: {
    flex: 2,
    borderWidth: 1,
    borderColor: "#f7f7f7",
    margin: 15,
    borderRadius: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    backgroundColor: "white",
    height: 230,
    elevation: 9,
    borderRadius: 20,
  },

  tasknamemian: { fontSize: 16, padding: 4 },
});
export default TaskListing;
