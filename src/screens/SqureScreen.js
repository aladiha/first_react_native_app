import React, { useState } from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import Count from '../components/ColorCounter'

const COLOR_INCREMENT = 20
const MAX_VALUE = 255
const MIN_VALUE = 0

const SquareScreen = () => {

    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return <View>
        <Count 
            title='Red' 
            onIncrease={() => {
                (red + COLOR_INCREMENT) <= MAX_VALUE ? setRed(red + COLOR_INCREMENT) : setRed(MAX_VALUE);
                console.log(red);
            }}
            onDecrease={() => {
                red - COLOR_INCREMENT >= MIN_VALUE ? setRed(red - COLOR_INCREMENT) : setRed(MIN_VALUE);
                console.log(red);
            }}
        />
        <Count 
            title='Green' 
            onIncrease={() => {
                (green + COLOR_INCREMENT) <= MAX_VALUE ? setGreen(green + COLOR_INCREMENT) : setGreen(MAX_VALUE);
                console.log(green);
            }}
            onDecrease={() => {
                green - COLOR_INCREMENT >= MIN_VALUE ? setGreen(green - COLOR_INCREMENT) : setGreen(MIN_VALUE);
                console.log(green);
            }}
        />
        <Count 
            title='Blue' 
            onIncrease={() => {
                (blue + COLOR_INCREMENT) <= MAX_VALUE ? setBlue(blue + COLOR_INCREMENT) : setBlue(MAX_VALUE);
                console.log(blue);
            }}
            onDecrease={() => {
                blue - COLOR_INCREMENT >= MIN_VALUE ? setBlue(blue - COLOR_INCREMENT) : setBlue(MIN_VALUE);
                console.log(blue);
            }}
        />
        <View style={{width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})` }}></View>
    </View>
};

const styles = StyleSheet.create({});

export default SquareScreen;
