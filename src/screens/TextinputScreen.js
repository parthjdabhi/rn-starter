import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextinputScreen = () => {
    const [password, setPassword] = useState('');

    return <View>
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete={false}
            value={password}
            onChangeText={(newValue)=> {
                setPassword(newValue);
            }}
            />
        {password.length < 5 ? <Text>Password should aleast 5 characters long.</Text> : null}
        <Button title="Reset" onPress={() => {
            setPassword("")
        }}></Button>
        
    </View>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
    },
    textInput: {
        padding: 12,
        margin: 10,
        borderColor: 'Black',
        borderWidth: 0.5,
        borderRadius: 10,
    }
})

export default TextinputScreen