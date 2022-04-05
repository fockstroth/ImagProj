import {StyleSheet, Text, View } from 'react-native';
import React from 'react'
import CButton from './Components/CountButton';
import { useState } from 'react/cjs/react.development';
import { useEffect } from "react/cjs/react.development";

var caf = require('./img/cafe.png');
var agu = require('./img/agua.png');


function App() {
  const [Relo,setRelo] = useState();
   
  useEffect(() => {
      setInterval(() => {
          const date = new Date();
          setRelo(date.toLocaleTimeString());
      }, 1000);
  
  }, []);

  return (
    <View style={sty.conteudo}>
      <Text style={sty.titulo}>Vida de Dev's</Text>
        <View style={sty.al}>
        <CButton tit="Café" caf = {caf} data ={Relo}/>
        <CButton tit="Água" caf = {agu} data ={Relo}/>
        </View>
      <Text style={{paddingTop:150, fontSize:20}}>{Relo}</Text>
    </View>
  );
}

export default App;

const sty = StyleSheet.create({
  conteudo: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titulo: {
    fontSize: 50,
    color: '#8B0000',
  },
  al: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});