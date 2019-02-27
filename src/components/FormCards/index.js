import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './FormCards.css';

class FormCards extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.cardTitle}>
          <Text style={styles.cardTitleText}>{this.props.cardTitle}</Text>
        </View>
        <View style={styles.hr} />
        <View style={styles.cardBottom}>
          <Text style={styles.cardBottomText}>{this.props.cardTimestamp}</Text>
        </View>
      </View>
    );
  }
}

export default FormCards;
