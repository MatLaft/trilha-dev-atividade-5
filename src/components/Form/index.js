import React, { useState } from "react"
import {View, Text, TextInput, TouchableOpacity,Vibration,Pressable,Keyboard,ImageBackground} from "react-native"
import ResultImc from "./ResultImc/";
import styles from "./style";

export default function Form(){
    
const [height,setHeight ]= useState(null)
const [weigth,setWeigth ]= useState(null)
const [messageImc,setMessageImc ]= useState('Preencha o peso e altura')
const [imc,setImc]= useState(null)
const [textButton,setTextButton ]= useState('Calcular')
const [errorMessage,setErrorMessage] = useState(null)
const [errorMessage1,setErrorMessage1] = useState(null)
const image = require('./Template.png')
    
function imcCalculator(){
    const subponto = weigth.replace(',','.')
    const subponto1 = height.replace(',','.')
    return setImc((subponto/Math.pow(subponto1,2)).toFixed(2))
}



function verificaitonImc(){
    if (weigth === null){
        Vibration.vibrate()
        setErrorMessage('Campo Obrigatório!!')
    }else{
        setErrorMessage(null)
    }
    if (height === null){
        Vibration.vibrate()
        setErrorMessage1('Campo Obrigatório!!')
    }else{
        setErrorMessage1(null)
    }
}

function validationImc(){
    if(weigth != null && height!= null){
        imcCalculator()
        setHeight(null)
        setWeigth(null)
        setMessageImc('Seu imc e igual:')
        setTextButton('Calcular novamente')
        setErrorMessage(null)
        setErrorMessage1(null)
        return
    }
    verificaitonImc()
    setImc(null)
    setTextButton('Calcular')
    setMessageImc('Preencha o peso e altura')
}
    return(
    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
        <ImageBackground source={image} style = {styles.image}>
        <Text   style= {styles.calctext} >Calculador IMC</Text>
        <View style = {styles.form}>
            <Text style = {styles.formLabel}>Altura</Text>
            <Text style = {styles.errorMessage}>{errorMessage1}</Text>
            <TextInput
            style = {styles.input}
            onChangeText={setHeight}
            value = {height}
            placeholder='Ex. 1.75'
            keyboardType='numeric'
            />
            <Text style = {styles.formLabel}>Peso</Text>
            <Text style = {styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style = {styles.input} 
            onChangeText={setWeigth}
            value = {weigth}
            placeholder='Ex. 82.30'
            keyboardType='numeric'
            />
            <TouchableOpacity
                style = {styles.buttonCalculator}
                onPress={()=>{validationImc(),Keyboard.dismiss()}}
                >
                <Text style={styles.textButtonCalculator}> {textButton} </Text>
             </TouchableOpacity>
        </View>
    <ResultImc messageResultImc={messageImc} resultImc={imc} style={styles.textButtonCalculator}/>
    </ImageBackground>
    </Pressable>
    );
}