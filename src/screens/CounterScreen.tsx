import React, { useState } from 'react';
import {Text, View, Button, FlatList, StyleSheet, ScrollView, TextInput} from 'react-native';

const CounterScreen =  ()=>{

    const [counter, setCounter] = React.useState(0);
    const [colors , setColors] = React.useState([""]);
    const [color, setColor] = React.useState("");

    const styles = StyleSheet.create({
        listStyle : {
            flexDirection : 'column',
            flexWrap : 'wrap',
            marginHorizontal : 20
        },
        itemStyle:{
            width : 50,
            height : 50,
            margin : 20,
            backgroundColor : 'black'
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            color: 'black'
        },
        flatList:{
            flexWrap: 'wrap',
            flexDirection: 'column'
        },
        text:{
            color: 'black'
        }
    });

    return (
        <ScrollView>
            <View style =  {styles.listStyle}>
                <Text>Coutner is: {counter}</Text>
                <Button title = '+' onPress = {()=>{setCounter(counter+1)}}/>
                <Button title = '-' onPress = {()=>{setCounter(counter-1)}}/>

                <Text> Add a Color </Text>
                <TextInput style = {styles.input} 
                    onChangeText = {(text) => {setColor(text.toString())}}/>
                <Button title = 'Add Color' onPress=  {()=> {let oldColors = [...colors]; oldColors.push(color);setColors(oldColors);}}/>

                <FlatList 
                    style = {styles.flatList}
                    keyExtractor={(item)=>item}
                    data = {colors.map((value,index)=>{
                        return (value);
                    })}
                    renderItem={({item}) => {
                        return  (
                        <View style = {[styles.itemStyle, {backgroundColor: item}]}>
                        </View>
                        );
                    }
                    }/>
            </View>
        </ScrollView>

    );

}

export default CounterScreen;