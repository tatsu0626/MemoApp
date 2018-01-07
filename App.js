import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appbar from './src/components/Appbar';
import MemoEditScreen from './src/screens/MemoEditScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <MemoEditScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:78,
    shadowColor:'#000',
    shadowOffset: {width:0,height:0},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    zIndex: 10,
  },
});
