import React from "react";
import { Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
    const colors = [
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ];
    return <FlatList 
    data={colors} 
    //keyExtractor={color => color.value}
    renderItem={({item}) => {
        //style={{color: item.value}} 
        return <Text style={styles.text} >{item.color} - {item.value}</Text>;
    }}
    />
    // return <Text>Text</Text>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginVertical: 12,
        marginHorizontal: 12,
    }
});


export default ListScreen