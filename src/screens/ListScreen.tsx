import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


const ListScreen = () => {
  const data = [
    {name: 'Item 1', type: 'list'},
    {name: 'Item 2', type: 'list'},
    {name: 'Item 3', type: 'list'},
    {name: 'Missing', type: 'unknown'},
    {name: 'empty', type: 'empty'},
    {name: 'Item 7', type: 'list'},
    {name: 'Item 8', type: 'list'},
    {name: 'Item 9', type: 'list'},
    {name: 'Missing2', type: 'unknown'},
    {name: 'empty2', type: 'empty'},
  ];

  return (
    <FlatList style = {styles.list}
    // keyExtractor is used to decode and provide keys ahead of time
      keyExtractor={(item)=>item.name}
      data={data}
      renderItem={({item}) => {
        return  (
          <View style = {styles.itemStyle}>
            <Text style = {styles.text}>Name: {item.name}</Text>
            <Text style = {styles.text}>Type: {item.type}</Text>
          </View>
        );
      }
    }
    />
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 50,
    marginLeft: 20
  },
  list: {
    backgroundColor: 'white'
  },
  itemStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default ListScreen;
