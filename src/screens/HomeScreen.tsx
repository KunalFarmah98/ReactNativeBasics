import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const HomeScreen = props => {
  const name: String = 'Kunal';
  return (
    <SafeAreaView style={styles.sectionContainer}>
        <Text style={styles.textHeader}>Getting Started with React Native </Text>
        <Button 
          title = 'Go to List'
          onPress = {goToList}/>
        <Button 
          title = 'Go to Images'
          onPress = {goToImages}/>
        <Button
          title = 'Go to Counter'
          onPress = {goToCounter}/>
        <TouchableOpacity onPress = {goToSquare}>
          <Text>Go to Multiple State Screen without reducer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {goToSquare2}>
          <Text>Go to Multiple State Screen with Reducer</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );

  function goToList(){
    props.navigation.navigate('List');
  }

  function goToCounter(){
    props.navigation.navigate('Counter');
  }

  function goToImages(){
    props.navigation.navigate('Image');
  }

  function goToSquare(){
    props.navigation.navigate('MultipleState');
  }

  function goToSquare2(){
    props.navigation.navigate('MultipleState2');
  }
};



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    flex: 1,
    padding: 20,
    alignItems : 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 24,
  },
  textHeader: {
    fontSize: 45,
    marginHorizontal: 20,
    color: 'orange',
  },
  textSubHeader: {
    marginTop: 30,
    fontSize: 20,
  },
});

export default HomeScreen;
