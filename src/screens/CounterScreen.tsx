import React, { useState } from 'react';
import {Text, View, Button, FlatList, StyleSheet, ScrollView, TextInput} from 'react-native';

const CounterScreen =  ()=>{

    const [counter, setCounter] = React.useState(0);
    const [colors , setColors] = React.useState([""]);
    const [color, setColor] = React.useState("");

    const styles = StyleSheet.create({
        listStyle : {
            flexDirection : 'column',
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
    const updateList = ()=>{
        let oldColors = [...colors]; 
        oldColors.push(color);
        setColors(oldColors);
    }
    return (
        <ScrollView>
            <View style =  {styles.listStyle}>
                <Text>Coutner is: {counter}</Text>
                <Button title = '+' onPress = {()=>{setCounter(counter+1)}}/>
                <Button title = '-' onPress = {()=>{setCounter(counter-1)}}/>

                <Text> Add a Color </Text>
                <TextInput style = {styles.input}
                    autoCapitalize = 'none'
                    keyboardType = 'default'
                    autoCorrect = {false}
                    value = {color}
                    onChangeText = {(text) => {
                        setColor(text.toString())}
                    }
                    onSubmitEditing = {updateList}/>

                {/* conditionally displaying a text asking color to be atleast 3 char long */}
                
                {(color.length>0 && color.length<3)?<Text style = {{color: 'red'}}>Color must be atleast 3 characters</Text>:null}

                <Button title = 'Add Color' onPress=  {updateList}/>

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

                    <View style= {{flexDirection: 'column'}}>
                        <View style = {{backgroundColor: 'orange', width : 100, height: 100 , alignSelf: 'flex-start'}}></View>
                        <View style = {{backgroundColor: 'purple', width : 100, height: 100, position: 'absolute', alignSelf: 'flex-end'}}></View>
                        <View style = {{backgroundColor: 'green', width : 100, height: 100, alignSelf: 'center'}}></View>
                    </View>


            </View>
        </ScrollView>

    );

}

export default CounterScreen;