import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const ListScreen = () =>{
    const friends = [
        {name: 'Friend #1', age: 12},
        {name: 'Friend #2', age: 23},
        {name: 'Friend #3', age: 23},
        {name: 'Friend #4', age: 25},
        {name: 'Friend #5', age: 45},
        {name: 'Friend #6', age: 43},
    ];
    return (<FlatList 
        data={friends}
        showsVerticalScrollIndicator={false}
        renderItem={(friend) => {
            return <Text style={styles.style}>
                {friend.item.name} - Age {friend.item.age}
            </Text>;
        }}
        keyExtractor = {(friend) => friend.name}
        />);
};

const styles = StyleSheet.create({
    style: {
        fontSize: 22,
        marginVertical: 50
    }
});

export default ListScreen;



