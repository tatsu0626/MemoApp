import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from './src/components/MemoList';
import Appbar from './src/components/Appbar';
import Circlebotton from './src/elements/Circlebotton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <MemoList />
        <Circlebotton>+</Circlebotton>
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
