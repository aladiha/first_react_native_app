import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const Count = (props) => {
    return <View>
            <Text>{props.title}</Text>
            <Button 
                title={`increase ${props.title}`}
                onPress={() => props.onIncrease()}
            />
            <Button 
                title={`decrease ${props.title}`}
                onPress={() => props.onDecrease()}
            />
        </View>
};

const styles = StyleSheet.create({});

export default Count;