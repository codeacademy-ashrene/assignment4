import React, { Component } from 'react';
import {
  View, ScrollView, Text, TouchableOpacity, SafeAreaView,
} from 'react-native';
import Header from '../Header';
import styles from './App.css';
import FormCards from '../FormCards';
import getForms from '../../helpers/getForms';


export default class App extends Component {
  state = {
    forms: [],
  }

  // rows=[];

  async componentDidMount() {
    const response = await getForms('http://localhost:8080/form');
    this.setState({
      forms: response.data,
    });
  }

  render() {
    const { forms } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Header />
          <ScrollView style={styles.scrollViewContent}>
            {/* <View>{this.rows}</View> */}
            {
              forms.map(formCard => (
                <FormCards
                  cardTitle={formCard.formname}
                  cardTimestamp={formCard.createdAt}
                  key={formCard.createdAt}
                />
              ))
            }
          </ScrollView>
          <TouchableOpacity style={styles.addButton} onPress={this.onPressAddButton}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>

    );
  }
}
