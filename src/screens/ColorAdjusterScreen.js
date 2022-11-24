import react, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ColorAdjusterItem from "../components/ColorAdjusterItem";

//
const COLOR_STEP_SIZE = 15;

const ColorAdjusterScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch(color) {
            case 'red':
                (red+change > 255) || (red+change < 0) ? null : setRed(red+change);
            case 'green':
                (green+change > 255) || (green+change < 0) ? null : setGreen(green+change);
            case 'blue':
                (blue+change > 255) || (blue+change < 0) ? null : setBlue(blue+change);
        }
        console.log(`Color: rgb(${red},${green},${blue})`);
    }
    return <View>
        <ColorAdjusterItem 
            color="red" 
            onIncrease={ () => {
                console.log(`onIncrease: red`);
                setColor("red", COLOR_STEP_SIZE);
            }} onDecrease={() => {
                setColor("red", -1 * COLOR_STEP_SIZE);
            }}/>
        <ColorAdjusterItem 
            color="green" 
            onIncrease={ () => {
                setColor("green", COLOR_STEP_SIZE);
            }} onDecrease={() => {
                setColor("green", -1 * COLOR_STEP_SIZE);
            }}/>
        <ColorAdjusterItem 
            color="blue" 
            onIncrease={ () => {
                setColor("blue", COLOR_STEP_SIZE);
            }} onDecrease={() => {
                setColor("blue", -1 * COLOR_STEP_SIZE);
            }}/>
        
        <View style={{ height:100, width:100, backgroundColor:`rgb(${red},${green},${blue})`}} />
    </View>
};

const styles = StyleSheet.create({});

export default ColorAdjusterScreen;