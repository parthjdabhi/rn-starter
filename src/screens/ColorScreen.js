import react, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    return <View>
        <Button 
            title="Random Color" 
            onPress={ () => {
                //console.log(`randomRgb: ${randomRgb()}`);
                console.log(`colors: ${colors}`);
                setColors([...colors, randomRgb()])
        }}/>
        <FlatList
            keyExtractor={item => item}
            data={colors}
            renderItem={({item}) => {
                return <View style={{ height:100, width:100, backgroundColor:item}}/>
            }}
        />
    </View>
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;