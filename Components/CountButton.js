import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"



export default function CButton(props){

    const [c,setc] = useState(0);
    


    return(
        <View style={{padding:10}}>
            <TouchableOpacity onPress={ ()=> {setc(c+1)} }>
                <View style={s.but}>
                    <Image style={s.ic} source={ props.caf }/>
                    <Text style={s.titulo}>{props.tit}</Text> 
                </View>
            </TouchableOpacity>
            <Text style={s.ct}>{c}</Text>
        </View>
    );


}
const s = StyleSheet.create({
    ic:{
        width: "90%",
        height: "90%",
        resizeMode:'contain'
    },
    but:{
        backgroundColor: '#A0522D',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
        width: 150,
        height: 140,
    },
    titulo:{
        fontSize: 20,
        color:'white',
    },
    ct:{
        fontSize: 80,
        color: '#A0522D',
        paddingLeft: 55,
    }
});