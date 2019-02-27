import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  card: {
    // width: '60%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 20,
  },
  cardTitle: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 300,
    padding: '5%',
  },
  cardTitleText: {
    color: '#000000',
    fontSize: 22,
  },
  hr: {
    flexGrow: 1,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  cardBottom: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 300,
  },
  cardBottomText: {
    color: '#000000',
    fontSize: 18,
    padding: '3%',
  },
});
