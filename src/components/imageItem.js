import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageItem = ({name, imageSource, imageScore}) => {
    return <View>
        <Image source={imageSource}></Image>
        <Text style={styles.heading}>{name}</Text>
        <Text style={styles.subHeading}>Image Score: {imageScore}</Text>
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


export default ImageItem