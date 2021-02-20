// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import {useState}  from "react";
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


const TaskListing = ({ navigation }) => {

  const [task, setTask] = useState();


  const handleTask = () => {
    setTask("ok");
  };

  // state = {
  //   text: "",
  // };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "white", marginTop: 0, padding: 5 }}>
        <ScrollView>
          <View>
            <Text
              style={{
                fontSize: 30,
                paddingTop: 20,
                textAlign: "center",
                color: "#757171",
                fontFamily: "open-sans-Regular",
              }}
            >
              Heading
            </Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Createtask")}
            >
              <Text>nextpage</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={[
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
            ]}
            renderItem={({ item }) => (
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
                    <Text style={{ fontSize: 20, padding: 4 }}>
                      {item.taskname}
                    </Text>
                    <Text
                      style={{ color: "#B2DDc1", fontSize: 17, padding: 4 }}
                    >
                      Date: {item.datereminder}
                    </Text>
                    <Text style={{ color: "silver", fontSize: 14, padding: 4 }}>
                      Time : {item.timereminder}
                    </Text>
                    <Text style={{ color: "silver", fontSize: 14, padding: 4 }}>
                      {item.taskdescription}
                    </Text>
                  </View>
                </View>
              </View>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </ScrollView>
      </View>
      {/* <View style={{ flex: 1, padding: 16 }}>
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
      </View> */}
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
});
export default TaskListing;
