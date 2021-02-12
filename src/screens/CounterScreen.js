import React, {useReducer} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import Animated from 'react-native-reanimated';



const reducer = (state, action) => {
    switch(action.type){
        case "increase":
            return {...state, count: state.count + action.payload};
        case "decrease":
            return {...state, count: state.count - action.payload};
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
    <View>
        <Text style={styles.number}>{state.count}</Text>
        <Button 
        title="increase"
        onPress={() => {
            dispatch({type: "increase", payload: 1});
        }}
        />
        <Button 
        title="decrease"
        onPress={() => {
            dispatch({type: "decrease", payload: 1});
        }}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    number: {
        fontSize: 50,
        marginLeft: 160,
        marginVertical: 100,
        color: 'green'
    }
})

export default CounterScreen;