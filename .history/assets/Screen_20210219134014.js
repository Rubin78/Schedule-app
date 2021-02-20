import React, { Component } from "react";
import { Text, View, StyleSheet ,SafeAreaView,TouchableOpacity} from "react-native";
import {FontAwesome5} from '@expo/vector-icons'

class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail Screen</Text>
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
});

export default DetailScreen;
