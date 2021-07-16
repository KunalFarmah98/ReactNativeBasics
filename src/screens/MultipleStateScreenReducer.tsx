import React, { useReducer, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const getFinalValue = (old, payload) => {
    if(old+payload>255)
        return 255;
    else if(old+payload<0)
        return 0;
    else return old+payload;
}


// this fun changes state
const reducer = (state, action) => {

    /* state is like
     * {'red':100, 'green':100, 'blue':100}
     */

    /** action is like
     * {type: 'change_color',
        payload: '+int'}
     **/

        switch(action.type){
            case 'change_Red': return{...state, Red: getFinalValue(state.Red, action.payload)}
            case 'change_Green': return{...state, Green: getFinalValue(state.Green, action.payload)}
            case 'change_Blue': return{...state, Blue: getFinalValue(state.Blue, action.payload)}
            default: return state
        }
    }





const MultipleStateScreen2= () =>{

    // alternate way of setting states that are extremely corelated
    const [state, dispatch] = useReducer(reducer,  {'Red':100, 'Green':100, 'Blue':100});

    return(
        <View style = {{justifyContent : 'space-between', flexWrap: 'wrap', flexDirection : 'column'}}>
            <ColorCounter color = 'Red' value = {state['Red']} stateChange = {dispatch} isReducer = {true}/>
            <ColorCounter color = 'Green' value  = {state['Green']} stateChange = {dispatch} isReducer = {true}/>
            <ColorCounter color = 'Blue' value = {state['Blue']} stateChange = {dispatch} isReducer = {true}/>
            <View style = {{height : 150, width : 150 ,backgroundColor: `rgb(${state['Red']},${state['Green']},${state['Blue']})`, margin: 30}}></View>
        </View>
    )

}


export default MultipleStateScreen2;