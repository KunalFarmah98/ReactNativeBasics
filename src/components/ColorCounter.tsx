import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';


const ColorCounter = (props)=>{

    const delta = 10;
    const isReducer = props.isReducer?true:false;



    return(
        <View style = {styles.counterStyle}>
            <Text style=  {{margin: 20}}>{props.color} = {props.value}</Text>
            <View style = {styles.buttonStyle}>
                <Button title = {`Increase ${props.color}`} onPress = {increase}/> 
                <Button title = {`Decrease ${props.color}`} onPress = {decrease}/> 
            </View>
        </View>
    );


    function increase(){
        if(!isReducer){
            if(props.value+delta >255){
                props.stateChange(255);
            }
            else{
                props.stateChange((props.value+delta))
            }
        }
        else
            props.stateChange({type: `change_${props.color}`, payload: delta});
    }
    
    function decrease(){
        if(!isReducer){
            if(props.value-delta <0){
                props.stateChange(0);
            }
            else{
                props.stateChange((props.value-delta))
            }
        }  
        else 
            props.stateChange({type: `change_${props.color}`, payload: -1*delta});

    }

}


const styles = StyleSheet.create({
    counterStyle: {
        flexWrap: 'nowrap',
        flexDirection: 'column'
    },
    buttonStyle:{
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default ColorCounter;