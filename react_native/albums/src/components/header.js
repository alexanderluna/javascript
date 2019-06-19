import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Header = () => (
  <Text style={styles.text}>App</Text>
);

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
});

export default Header;