import React from 'react';
import { Text, StyleSheet, View } from 'react-native'



const Components = () => {
    return (<View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        </View>
    );};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    }
});

export default Components;
