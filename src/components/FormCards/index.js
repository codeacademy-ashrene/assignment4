import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './FormCards.css';

class FormCards extends Component {
  render() {
    const { cardTitle, cardTimestamp } = this.props;
    return (
      <View style={styles.card}>
        <View style={styles.cardTitle}>
          <Text style={styles.cardTitleText}>{cardTitle}</Text>
        </View>
        <View style={styles.hr} />
        <View style={styles.cardBottom}>
          <Text style={styles.cardBottomText}>{cardTimestamp}</Text>
        </View>
      </View>
    );
  }
}

export default FormCards;
