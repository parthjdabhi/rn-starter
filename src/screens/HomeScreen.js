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
      title="1. Component Example"
    />
    <TouchableOpacity onPress={() => {
      console.log("2. ListScreen button pressed.")
      props.navigation.navigate('ListScreen');
    }}>
      <Text>2. ListScreen</Text>
    </TouchableOpacity>
    <Button 
      onPress={() => {
        console.log("3. ImageList button pressed.");
        props.navigation.navigate('ImageList');
      }}
      title="3. Image List"
    />
    <Button 
      onPress={() => {
        console.log("4. CounterScreen button pressed.");
        props.navigation.navigate('CounterScreen');
      }}
      title="4. Counter"
    />
    <Button 
      onPress={() => {
        console.log("5. ColorScreen button pressed.");
        props.navigation.navigate('ColorScreen');
      }}
      title="5. ColorScreen"
    />
    <Button 
      onPress={() => {
        console.log("5. ColorAdjusterScreen button pressed.");
        props.navigation.navigate('ColorAdjusterScreen');
      }}
      title="5. Color Adjuster Screen"
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
