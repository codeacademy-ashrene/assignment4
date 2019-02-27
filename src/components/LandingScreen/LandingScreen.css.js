import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#D8E4F0',
  },
  scrollViewContent: {
    marginTop: 100,
  },
  plus: {
    fontSize: 55,
    color: '#FFFFFF',
    // textAlign: 'center',
  },
  addButton: {
    borderRadius: 100,
    // borderWidth: 1,
    borderColor: '#ffffff',
    width: 80,
    height: 80,
    backgroundColor: '#3F51B5',
    alignSelf: 'flex-end',
    position: 'relative',
    bottom: 60,
    right: 20,
    alignItems: 'center',
  },
});
