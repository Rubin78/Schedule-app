import React, { Component } from "react";
import { Text, View, StyleSheet ,SafeAreaView,TouchableOpacity} from "react-native";
import {FontAwesome5} from '@expo/vector-icons'

class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>

          <SafeAreaView style={{flex:1}}>

            <TouchableOpacity style={{alignItems:"flex-end",margin:16}} 
            onPress={this.props.navigation.openDrawer}>
              <FontAwesome5  name="bars" size={24}  color="#161924"   />

            </TouchableOpacity>

            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

              <Text style={styles.text} {this.props.name}></Text>
            </View>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderStartColor: "#fff",
  },

  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "#161924",
  },
});

export default DetailScreen;
