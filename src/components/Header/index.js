import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Header;
