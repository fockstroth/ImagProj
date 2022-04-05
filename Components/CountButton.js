import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"
import { useEffect } from "react/cjs/react.development";


var ativador = false;
export default function CButton(props){

    const [c,setc] = useState(0);
    function timeAct(data){
        useEffect(() => {
            if(data === '00:00:00'){
                setc(0);
                return ;
            }
            return ;
        }, [data]);
    }

    return(
        <View style={{padding:10}}>
            {timeAct(props.data)}

            <TouchableOpacity onPress={ ()=> {setc(c+1)} }>
                <View style={s.but}>
                    <Image style={s.ic} source={ props.caf }/>
                    <Text style={s.titulo}>{props.tit}</Text> 
                    <Text style={s.ct}>{c}</Text>
                    <Text>{props.data}</Text>
                </View>
            </TouchableOpacity>

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
    }
});