import {StyleSheet, Text, View } from 'react-native';
import React from 'react'
import CButton from './Components/CountButton';

var caf = require('./img/cafe.png');
var agu = require('./img/agua.png');


function App() {
  return (
    <View style={sty.conteudo}>
      <Text style={sty.titulo}>Vida de Dev's</Text>
        <View style={sty.al}>
        <CButton tit="Café" caf = {caf} />
        <CButton tit="Água" caf = {agu} />
        </View>
      
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