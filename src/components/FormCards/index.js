import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './FormCards.css';

class Header extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.cardTitle}>
          <Text style={styles.cardTitleText}>Code Academy Feedback 2019</Text>
        </View>
        <View style={styles.hr} />
        <View style={styles.cardBottom}>
          <Text style={styles.cardBottomText}>Created On: 26/02/2019</Text>
        </View>
      </View>
    );
  }
}

export default Header;
