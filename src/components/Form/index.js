import React, {useState} from "react";
import { 
    TextInput,
    Text, 
    View, 
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList,
} from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style"; 



export default function Form() { 

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState("preencha o peso e a altura");
    const [imc, setIMC] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        var heightFormat = height.replace(",", ".");
        var totalIMC = (weight/(heightFormat * heightFormat)).toFixed(2);
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalIMC}]);
        setIMC(totalIMC);
    }

    function verificationIMC() { 
        if (imc === null) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*");
        }
     }

    function validationIMC() { 
        console.log(imcList)
        if(weight !== null && height !== null){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageIMC("Seu imc é igual: ");
            setTextButton("Calcular novamente");
            setErrorMessage(null);
        } else{
            verificationIMC();
            setIMC(null);
            setTextButton("Calcular");
            setMessageIMC("preencha o peso e a altura")
        }
    }

    return(
        <View style={styles.formContext}>
            {imc === null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex: 75.365"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.buttonCalculator}                    
                    onPress={() => {
                        validationIMC();
                        Keyboard.dismiss();
                    }}
                    accessible={false}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </Pressable>
            :   
            <View style={styles.exhibitionResultIMC}>
                <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
                <TouchableOpacity
                    style={styles.buttonCalculator}                    
                    onPress={() => {
                        validationIMC();
                        Keyboard.dismiss();
                    }}
                    accessible={false}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            } 
            <FlatList
                style={styles.listImcs}
                data={imcList.reverse()}
                renderItem={({item}, key) =>{
                    return(
                        <Text style={styles.resultIMCItem}>
                            <Text style={styles.textResultItemList}key={key}>Resultado IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => {
                    item.id
                }}
            />

        </View>

    );
}

