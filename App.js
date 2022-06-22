import React from 'react';
import { StyleSheet, Text, View,Pressable,Keyboard,ImageBackground } from 'react-native';
import Title from "./src/components/Title";
import Form from './src/components/Form';

const image = require('./src/components/Form/Templatefundo.png')

export default function App() {
  return (
      <ImageBackground source={image} style={styles.fundo}>
    <Pressable onPress={Keyboard.dismiss} >
      <Title/>
      <Form/>
    </Pressable>
      </ImageBackground>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80
  },
  fundo:{
    flex:1,

    
  }
});
