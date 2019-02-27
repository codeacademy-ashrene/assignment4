import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Awesome Forms</Text>
      </View>
    );
  }
}

export default Header;
