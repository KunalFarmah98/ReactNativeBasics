import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ImageItem= (props)=>{
    return(

        <View style={styles.listStyle}>
            <Image source = {props.src}/>
            <Text style = {{marginHorizontal: 20, fontSize: 20}}>{props.title}</Text>
        </View>

    );

}


const styles = StyleSheet.create({
    listStyle: {
        margin: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: 'blue',
        flexWrap : 'wrap',
        flexDirection : 'row',
        alignContent : 'center'
    }
})

export default ImageItem;