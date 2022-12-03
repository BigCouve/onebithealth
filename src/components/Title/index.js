import React from "react";
import { View, Text } from "react-native";

export default function Title() { 
    return(
        <View>
            <Text style={styles.title}>ONEBITHEALTH!</Text>
        </View>
    );
}

const styles = EStyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    title: {
        color: 'gray',
        fontSize: '5rem',
    }
})