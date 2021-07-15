import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ImageItem from '../components/ImageItem';

const ImagesScreen= ()=>{
    return(
        <View style = {styles.listStyle}>
            <ImageItem title = 'Forest' src = {require('../assets/forest.jpg')}/>
            <ImageItem title = 'Mountain' src = {require('../assets/mountain.jpg')}/>
            <ImageItem title = 'Beach' src = {require('../assets/beach.jpg')}/>
        </View>
    );


}


const styles = StyleSheet.create({
    listStyle: {
        flex : 1,
        flexWrap : 'wrap',
        flexDirection : 'column',
        alignContent : 'flex-start'
    }
})

export default ImagesScreen;