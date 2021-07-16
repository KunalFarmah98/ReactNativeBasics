import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const MultipleStateScreen = () =>{

    const [red, setRed] = useState(100)
    const [green, setGreen] = useState(100)
    const [blue, setBlue] = useState(100)

    return(
        <View style = {{justifyContent : 'space-between', flexWrap: 'wrap', flexDirection : 'column'}}>
            <ColorCounter color = 'Red' value = {red} stateChange = {setRed} isReducer = {false}/>
            <ColorCounter color = 'Green' value  = {green} stateChange = {setGreen} isReducer = {false}/>
            <ColorCounter color = 'Blue' value = {blue} stateChange = {setBlue} isReducer = {false}/>
            <View style = {{height : 150, width : 150 ,backgroundColor: `rgb(${red},${green},${blue})`, margin: 30}}></View>
        </View>
    )

}


export default MultipleStateScreen;