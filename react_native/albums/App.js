import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <View style={styles.container}>
    <Header />
    <Text style={styles.text}>Hello World 🚀</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  }
});

export default App;