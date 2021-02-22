
import React, { useEffect } from "react";

import { Button, View, Text, SafeAreaView, AppRegistry,styles } from "react-native";
import * as Calendar from "expo-calendar";

const Calender = ({ navigation }) => {


    useEffect(() => {
      (async () => {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === "granted") {
          const calendars = await Calendar.getCalendarsAsync(
            Calendar.EntityTypes.EVENT
          );
          console.log("Here are all your calendars:");
          console.log({ calendars });
        }
      })();
    }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>



          <View >
      <Text>Calendar Module Example</Text>
      <Button title="Create a new calendar" onPress={createCalendar} />
    </View>

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
}



async function getDefaultCalendarSource() {
  const calendars = await Calendar.getCalendarsAsync(
    Calendar.EntityTypes.EVENT
  );
  const defaultCalendars = calendars.filter(
    (each) => each.source.name === "Default"
  );
  return defaultCalendars[0].source;
}

async function createCalendar() {
  const defaultCalendarSource =
    Platform.OS === "ios"
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: "Expo Calendar" };
  const newCalendarID = await Calendar.createCalendarAsync({
    title: "Expo Calendar",
    color: "blue",
    entityType: Calendar.EntityTypes.EVENT,
    sourceId: defaultCalendarSource.id,
    source: defaultCalendarSource,
    name: "internalCalendarName",
    ownerAccount: "personal",
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
  });
  console.log(`Your new calendar ID is: ${newCalendarID}`);
}


export default Calender;
