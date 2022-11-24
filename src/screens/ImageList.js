import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import ImageItem from "../components/imageItem";

const ImageList = (props) => {
    return <View>
        <Text style={styles.heading}>Image List</Text>
        <ImageItem name="beach" imageSource={require('../../assets/images/beach.jpg')} imageScore="70%"></ImageItem>
        <ImageItem name="forest" imageSource={require('../../assets/images/forest.jpg')} imageScore="50%"></ImageItem>
        <ImageItem name="mountain" imageSource={require('../../assets/images/mountain.jpg')} imageScore="80%"></ImageItem>
    </View>
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        padding: 12,
        textAlign: "center",
    },
    subHeading: {
        fontSize: 20,
    }
})


export default ImageList