import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  // return <Text style={styles.text}>HomeScreen T</Text>;
  return <View>
    <Text style={styles.text}>Hi, There</Text>
    <Button 
      onPress={() => {
        console.log("1. Component button pressed.");
        props.navigation.navigate('ComponentHello');
      }}
      title="1. Component"
    />
    <TouchableOpacity onPress={() => {
      console.log("1. ListScreen button pressed.")
      props.navigation.navigate('ListScreen');
    }}>
      <Text>2. ListScreen</Text>
    </TouchableOpacity>
    <Button 
      onPress={() => {
        console.log("1. ImageList button pressed.");
        props.navigation.navigate('ImageList');
      }}
      title="3. ImageList"
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
