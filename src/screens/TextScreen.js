import React, {useState} from 'react'
import {Text, Button, StyleSheet, View, TextInput} from 'react-native'
import { set } from 'react-native-reanimated';
import { withOrientation } from 'react-navigation';

const TextScreen = () => {
    const [name, setName] = useState('');

    return <View>
        <TextInput style={styles.style} 
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue)=>{
                setName(newValue);
            }}
        />
        <View>
            <Text>{name.length < 5 ? 'The Password Must be at least 5 characters' : null}</Text>
        </View>
    </View>
}



const styles = StyleSheet.create({
    style: {
        backgroundColor: 'lightgray',
        height: 50,
        color: 'black',
        paddingHorizontal: 50,
        margin: 20,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 54,
        fontWeight: 'bold',
        fontSize: 23,
    }
});

export default TextScreen;