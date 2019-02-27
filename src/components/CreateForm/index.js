import React, { Component } from 'react';
import {
  View, ScrollView, Text, SafeAreaView, Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import styles from './CreateForm.css';
import createForm from '../../helpers/createForm';

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
    addField: false,
    formText: '',
    // formField: [],
    count: 0,
  }

  row=[]

  formField=[]

  onPressAddField = () => {
    this.row.push(<TextInput style={styles.textInput} onChangeText={formText => this.setState({ formText })} />);
    // console.log(this.state.formText);
    this.formField.push(this.state.formText);
    this.setState({
      addField: !this.state.addField,
      count: this.state.count + 1,
    });
  }

  onPressSendForm = async () => {
    const fields = this.formField.slice(2);
    const fieldObject = {};
    fields.map((element) => {
      fieldObject[element] = [];
    });
    const payload = {
      formId: Date.now().toString(),
      formName: this.state.text,
      fieldsAndResponses: fieldObject,
    };
    // console.log(payload);
    const promise = await createForm('http://localhost:8080/createForm', payload).then(console.log('done'));
  }

  render() {
    return (
      <View style={styles.createFormContainer}>
        <SafeAreaView style={styles.scrollViewContent}>
          <ScrollView>
            <View>
              <TextInput style={styles.textInput} value={this.state.text} onChangeText={text => this.setState({ text })} />
              <View style={styles.addField}>
                <Button

                  title="ADD FIELD"
                  color="#FFFFFF"
                  onPress={this.onPressAddField}
                />

              </View>
              <View>{this.row}</View>
            </View>
          </ScrollView>
          <View style={styles.save}>
            <Button

              title="SAVE"
              color="#FFFFFF"
              onPress={this.onPressSendForm}
            />
          </View>
        </SafeAreaView>
      </View>

    );
  }
}
