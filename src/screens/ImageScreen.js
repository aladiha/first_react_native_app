import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return <View>
        <ImageDetail 
            title="forest"
            image={require('../../assets/forest.jpg')}
            score='8'
        />
        <ImageDetail 
            title="beach"
            image={require('../../assets/beach.jpg')}
            score='7'
        />  
        <ImageDetail 
            title="mountain"
            image={require('../../assets/mountain.jpg')}
            score='9'
        />
        </View>
}

const styles = StyleSheet.create({

});

export default ImageScreen;