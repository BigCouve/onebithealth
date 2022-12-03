import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default function ResultIMC(props) { 
    return(
        <View style={styles.container}>
            <Text>{props.messageResultIMC}</Text>
            <Text>{props.resultIMC}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    }
    
})