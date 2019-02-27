import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  createFormContainer: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    // height: '100%',
    // alignItems: 'flex-end',

  },
  createFormHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#3F51B5',

  },
  createFormText: {
    backgroundColor: '#3F51B5',
    color: '#FFFFFF',
    height: 80,
    fontSize: 30,
    width: '100%',
    padding: '5%',
  },
  bar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3F51B5',
    marginTop: 20,

  },
  arrowleft: {
    padding: '5%',
  },
  textInput: {
    flex: 1,
    color: '#000000',
    height: 40,
    width: '80%',
    alignSelf: 'center',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    margin: '2%',
  },
  scrollViewContent: {
    marginTop: 30,
  },
  addField: {
    backgroundColor: '#3F51B5',
    width: '30%',
    alignSelf: 'flex-end',
    marginRight: 30,
    marginTop: 30,
    marginBottom: 30,
  },
  save: {
    backgroundColor: '#3F51B5',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    width: '100%',


  },
});
