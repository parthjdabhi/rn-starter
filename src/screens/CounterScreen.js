import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return <View>
        <Button title="Increase" onPress={() => {
            setCounter(counter+1)
        }}></Button>
        <Button title="Decrease" onPress={() => {
            setCounter(counter-1)
        }}></Button>
        <Text>Current Count: {counter} </Text>
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
    }
})

export default CounterScreen