import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.text}>{this.props.title}</Text>

          <Icon
            name="ellipsis-v"
            size={30}
            color="#FFFFFF"
          />

        </View>
      </SafeAreaView>
    );
  }
}

export default Header;
