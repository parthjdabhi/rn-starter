import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentHello = () => {
    const name = "Parth";
    return <View>
        <Text style={styles.heading}>Getting Started With React Native. </Text>
        <Text style={styles.subHeading}> Hello, {name}! </Text>
    </View>
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
    },
    subHeading: {
        fontSize: 20,
    }
})


export default ComponentHello