import React, { Component } from 'react';
import {
  View, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import Header from '../Header';
import styles from './App.css';
import FormCards from '../FormCards';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.scrollViewContent}>
          <FormCards />
          <FormCards />
          <FormCards />
          <FormCards />
          <FormCards />
        </ScrollView>
        <TouchableOpacity style={styles.addButton} onPress={this.onPressAddButton}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
