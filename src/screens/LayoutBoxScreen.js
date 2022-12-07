import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const LayoutBoxScreen = () => {
    const [password, setPassword] = useState('');

    return <View>
        <View style={styles.parentView}>
            <Text style={styles.box}> Box 1 </Text>
            <Text style={styles.box}> Box 2 </Text>
            <Text style={styles.box}> Box 3 </Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    parentView: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        height: 300,
        flexDirection: "row",
        //alignContent: "space-between",
        justifyContent: "space-between",
    },
    box: {
        padding: 4,
        borderColor: 'red',
        borderWidth: 0.5,
        // height: 50,
    }
})

export default LayoutBoxScreen