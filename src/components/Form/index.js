import React, {useState} from "react";
import { TextInput, Text, View, Button } from "react-native";
import ResultIMC from "./ResultIMC"

export default function Form() { 

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState("preencha o peso e a altura");
    const [imc, setIMC] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator() {
        return setIMC((weight/(height*height)).toFixed(2));
    }

    function validationIMC() { 
        if(weight !== null && height !== null){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageIMC("Seu imc é igual: ");
            setTextButton("Calcular novamente");
            return true;
        }
        setIMC(null);
        setTextButton("Calcular");
        setMessageIMC("preencha o peso e a altura")
    }

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex: 75.365"
                    keyboardType="numeric"
                />
                <Button onPress={validationIMC} title={textButton}/>
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
            <View></View>
            <View></View>
        </View>
    );
}