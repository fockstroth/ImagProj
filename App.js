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
          if (date.toLocaleTimeString() == '00:00:00'){
          }
      }, 1000);
  
  }, []);

  return (
    <View style={sty.conteudo}>
      <Text style={sty.titulo}>Vida de Dev's</Text>
        <View style={sty.al}>
        <CButton tit="Café" caf = {caf} />
        <CButton tit="Água" caf = {agu} />
        </View>
      <Text>{Relo}</Text>
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