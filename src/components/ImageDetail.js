import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = (props) => {
    return <View style={styles.container}>
        <Text>{props.title}</Text>
        <Image source={props.image}/>
        <Text>Image score - {props.score}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

export default ImageDetail;