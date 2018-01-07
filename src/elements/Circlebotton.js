import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Circlebotton extends React.Component {
  render() {
    const {style,color} =this.props;
    let bgColor ='#f765a0'
    let textColor ='white'

    if (color==='white'){
      bgColor='#fff';
      textColor='#f765a0';
    }
    return(
      <View style={[styles.memoaddbotton,style,{backgroundColor:bgColor}]}>
      <Text style={[styles.memoaddbottonTitle,{color:textColor}]}>
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
