import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen: React.FC = () => {
  return (
    <View>
      <Text style={style.textStyle}>This is a react components screen</Text>
    </View>
  )
}

const style = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;