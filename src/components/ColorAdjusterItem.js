import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

const ColorAdjusterItem = ({color, onIncrease, onDecrease}) => {
    return <View>
        <Text style={styles.heading}>{color}</Text>
        <Button title={`Increase ${color}`} onPress={() => onIncrease()}/>
        <Button title={`Decrease ${color}`} onPress={() => onDecrease()}/>
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


export default ColorAdjusterItem