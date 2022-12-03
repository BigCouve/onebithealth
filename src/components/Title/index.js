import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title() { 
    return(
        <View style={styles.container}>
            <Text style={styles.title}>ONE BIT HEALTH!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,

    },
    title: {
        color: 'gray',
        fontSize: 30,
    }
})