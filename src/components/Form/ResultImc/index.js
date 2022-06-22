import React from "react"
import {View, Text,TouchableOpacity, Share} from "react-native"
import styles from "./style";


export default function ResultImc(props){
    
    const onShare = async () =>{
        const result = await Share.share({
            message: 'meu imc:' +props.resultImc 
        })
    }
    
    return(
        <View style= {styles.ResultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style = {styles.NumberIMC}>{props.resultImc}</Text>
            <View style = {styles.boxShare}>
                {props.resultImc != null ?
                <TouchableOpacity style = {styles.shareButton} onPress ={()=>{onShare()}} > 
                    <Text style = {styles.textShareButton}>Share</Text>
                </TouchableOpacity>
                :
                <View/>
                }
            </View>
        </View>
    );
}