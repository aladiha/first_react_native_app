import React, {useState} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
    <View>
        <Text>{counter}</Text>
        <Button 
        title="increase"
        onPress={() => {setCounter(counter+1)}}
        />
        <Button 
        title="decrease"
        onPress={() => {setCounter(counter-1)}}
        />
    </View>
    );
}

const styles = StyleSheet.create({

})

export default CounterScreen;