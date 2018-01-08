import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import { Font } from 'expo';
/*import fontAwesome from '../../assets/fonts/fontawesome-webfont.ttf';*/

class Circlebotton extends React.Component {
/*state = {
    fontLoaded: false,
}

  async componentWillMount() {
   await Font.loadAsync({
     FontAwesome : fontAwesome,
   });
   this.setState({ fontLoaded: true });
 }
*/
  render() {
    const {style,color,onPress} =this.props;
    let bgColor ='#f765a0'
    let textColor ='white'

    if (color==='white'){
      bgColor='#fff';
      textColor='#f765a0';
    }
    return(
    <TouchableHighlight style={[styles.container,style]} onPress={onPress} underlayColor='transparent'>
      <View style={[styles.memoaddbotton,{backgroundColor:bgColor}]}>
        {this.props.children}
      {/*  {
          this.state.fontLoaded ? (
            <Text style={[styles.memoaddbottonTitle,{color:textColor}]}>
             {this.props.children}
            </Text>
          ) : null
        }*/}
      </View>
    </TouchableHighlight>
    );
  }
}

const styles= StyleSheet.create({
  container:{
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  memoaddbotton:{
    /*fontFamily:'FontAwesome',*/
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
