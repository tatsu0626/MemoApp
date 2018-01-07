import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Circlebotton extends React.Component {
  render() {
    return(
      <View style={styles.memoaddbotton}>
      <Text style={styles.memoaddbottonTitle}>
       {this.props.children}
      </Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  memoaddbotton:{
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#f765a0',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  memoaddbottonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: 'white',
  },
});

export default Circlebotton;
