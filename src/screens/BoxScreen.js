import React from 'react'
import { Text, Button, StyleSheet, View} from 'react-native'

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <View style={styles.viewStyle1}></View>
        <View style={styles.viewStyle2}></View>
        <View style={styles.viewStyle3}></View>
    </View>
}

const styles = StyleSheet.create({
   /* viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewStyle1: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
    },
    viewStyle2: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        marginTop: 100
    },
    viewStyle3: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
    }*/

    viewStyle: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewStyle1: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
    },
    viewStyle2: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        alignSelf: 'flex-end',
    },
    viewStyle3: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
    }
})

export default BoxScreen;
