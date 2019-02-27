import React, { Component } from 'react';
import {
  View, ScrollView, Text, SafeAreaView, TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import styles from './CreateForm.css';

export default class CreateForm extends Component {
  static navigationOptions = {
    headerLeft: null,
    headerTitle: <View style={styles.bar}>
      <View style={styles.arrowleft}>
        <Icon
          name="arrow-left"
          size={30}
          color="#FFFFFF"
          // onPress={() => this.props.navigation.navigate('LandingScreen')}
        />
      </View>
      <View style={styles.createFormHeader}>

        <Text style={styles.createFormText}>Create Form</Text>
      </View>
    </View>,

  };

  state = {
    text: 'Form Name',
  }

  render() {
    return (
      <View style={styles.createFormContainer}>
        <SafeAreaView style={styles.scrollViewContent}>
          <ScrollView>
            <View>
              <TextInput multiline style={styles.textInput} value={this.state.text} onChangeText={text => this.setState({ text })} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>

    );
  }
}
