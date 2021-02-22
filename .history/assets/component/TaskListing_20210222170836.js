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
                     <View style={styles.cardmain}>
                        <View
                          style={styles.cardinside}>
                            <Text style={styles.tasknamemain}>
                             Task Name : {item.taskName}
                             </Text>
                              <Text
                              style={styles.datemain}>
                              Date: {item.d}
                             </Text>
                             <Text
                             style={styles.timemain}>
                             Time : {item.t}
                            </Text>
                            <Text
                           style={styles.descriptionmain} >
                          Description : {item.taskDesc}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </>

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

      cardmain: {
      flexDirection: "row-reverse",
      margin: 24,
      },

      cardinside: {
      flexDirection: "column",
      flex: 1.2,
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

      tasknamemain: { fontSize: 16, 
        padding: 4 
      },

      datemain: {
      color: "#B2DDc1",
      fontSize: 15,
      padding: 4,
      },

      timemain: {
      color: "silver",
      fontSize: 15,
      padding: 5,
      },

      descriptionmain: {
      color: "silver",
      fontSize: 14,
      padding: 4,
      },
});
export default TaskListing;
