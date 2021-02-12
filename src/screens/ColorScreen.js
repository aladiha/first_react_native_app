import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';


const ColorScreen = () => {
    
    const [colors, setColor] = useState([]);

    console.log(colors);

    return <View style={{marginBottom: 50}}>
        <Button 
            onPress={() => {
                setColor([...colors, getColor()]);
            }}
            title="add color"
        />
        <FlatList
            data={colors}
            keyExtractor={(item) => item}
            renderItem={({item}) => {
                return <View style={{width: '100%', height: 100, backgroundColor: item}}></View>
            }}>
        </FlatList>
    </View>
};




const getColor = () => {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;