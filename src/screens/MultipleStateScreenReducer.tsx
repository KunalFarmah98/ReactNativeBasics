import React, { useReducer, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

function getFinalValue(old, amount){
    if(old+amount>255)
        return 255;
    else if(old+amount<0)
        return 0;
    else return old+amount;
}


// this fun changes state
function reducer(state, action){

    /* state is like
     * {'red':100, 'green':100, 'blue':100}
     */

    /** action is like
     * {colorToChange: 'color',
        amount: '+-int'}
     **/

        switch(action.colorToChange){
            case 'Red': return{...state, Red: getFinalValue(state.Red, action.amount)}
            case 'Green': return{...state, Green: getFinalValue(state.Green, action.amount)}
            case 'Blue': return{...state, Blue: getFinalValue(state.Blue, action.amount)}
            default: return state
        }
    }





const MultipleStateScreen2= () =>{

    // alternate way of setting states that are extremely corelated
    const [state, runReducer] = useReducer(reducer,  {'Red':100, 'Green':100, 'Blue':100});

    return(
        <View style = {{justifyContent : 'space-between', flexWrap: 'wrap', flexDirection : 'column'}}>
            <ColorCounter color = 'Red' value = {state['Red']} stateChange = {runReducer} isReducer = {true}/>
            <ColorCounter color = 'Green' value  = {state['Green']} stateChange = {runReducer} isReducer = {true}/>
            <ColorCounter color = 'Blue' value = {state['Blue']} stateChange = {runReducer} isReducer = {true}/>
            <View style = {{height : 150, width : 150 ,backgroundColor: `rgb(${state['Red']},${state['Green']},${state['Blue']})`, margin: 30}}></View>
        </View>
    )

}


export default MultipleStateScreen2;