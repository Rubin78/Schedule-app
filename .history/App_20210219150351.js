import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons"; // refer
import * as Font from "expo-font";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";


import { ScrollView } from "react-native-gesture-handler";
class Listofdoctor extends React.Component {

  render() {
    return (
      <View style={{ backgroundColor: "white", marginTop: 0 }}>
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
          <FlatList
            data={[
              {
                title: "Erika Mars",
                subtitle: "Lactation expert",
                experience: "12 years of experience",
                
              },
              
            ]}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={{ flexDirection: "row", margin: 22 }}>
                  <View style={{ flexDirection: "column", flex: 2 }}>
                    <Text style={{ fontSize: 20 }}>{item.title}</Text>
                    <Text style={{ color: "#B2DDc1", fontSize: 17 }}>
                      {item.subtitle}
                    </Text>
                    <Text style={{ color: "silver", fontSize: 14 }}>
                      {item.experience}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      justifyContent: "space-around",
                    }}
                  >
                    <View
                      style={{
                        borderLeftWidth: 1,
                        borderLeftColor: "#dddddd80",
                      }}
                    />
                    <View>
                      <TouchableOpacity
                        
                      >
                        <Image
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 100,
                            borderWidth: 0.1,
                            borderColor: "#000000",
                          }}
                          source={item.avtar}
                        />
                        <Text
                          style={{
                            fontSize: 11,
                            textAlign: "center",
                            marginTop: 5,
                            color: "#c4c4c4",
                          }}
                        >
                          MBBS, MD
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                   
                    style={{
                      alignSelf: "center",
                      backgroundColor: "#B2DDC1",
                      borderRadius: 20,
                      padding: 3,
                      height: 32,
                      width: 155,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        textAlign: "center",
                      }}
                    >
                      Check Availability{" "}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </ScrollView>
      </View>
    );
  }
}

// class Community extends React.Component {
//     render() {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>Under working</Text>
//         </View>
//       );
//     }
//   }

//   class general extends React.Component {
//     render() {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>general page</Text>
//         </View>
//       );
//     }
//   }

// const TabNavigator = createBottomTabNavigator({
//     E: {

//         screen:E,
//         navigationOptions:{
//             tabBarLabel:'Find Care',
//             tabBarIcon:({tintColor})=>(
//                 <FontAwesome name='heartbeat' color={tintColor} size={24}/>
//             )

//         }

//     },
//     Community: {
//         screen:Community,
//         navigationOptions:{
//             tabBarLabel:'Community',
//             tabBarIcon:({tintColor})=>(
//                 <MaterialCommunityIcons name='file-document' color={tintColor} size={24}/>
//             )

//         }
//     },
//     general: {
//         screen:general,
//         navigationOptions:{
//             tabBarLabel:'me',
//             tabBarIcon:({tintColor})=>(
//                 <MaterialIcons name='person' color={tintColor} size={24}/>
//             )

//         }
//     },

//   },
//   {
//       initialRouteName:'Community',

//       tabBarOptions:{
//           activeTintColor:'#B2ddc1',
//           inactiveTintColor:'gray',
//           style: {
//             backgroundColor: 'white',//color you want to change
//             borderTopWidth:0
//           }

//       }

//     } );

// export default createAppContainer(TabNavigator);
const AppNavigator = createStackNavigator({
  Listofdoctor: {
    screen: Listofdoctor,
    navigationOptions: {
      header: null, // Will hide header for all screens of current stack
    },
  },

});
export default createAppContainer(AppNavigator);

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
    height: 170,
    elevation: 9,
    borderRadius: 20,
  },
});
