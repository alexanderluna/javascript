import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <Text style={styles.text}>Homepage</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
