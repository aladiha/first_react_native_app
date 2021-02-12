import React from "react";
import { render } from "react-dom";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";



const HomeScreen = ({navigation}) => {
  return <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Components')} 
        title="Go to Components demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter demo"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color demo"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to Square demo"
      />
    </View>
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
      width: 200,
      height: 100,
      color: 'red',
      backgroundColor:'lightblue',
      paddingHorizontal: 12,
      paddingVertical: 'auto',
      fontSize: 23
  }
});

export default HomeScreen;
