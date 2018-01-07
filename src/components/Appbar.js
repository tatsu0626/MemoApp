import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Appbar extends React.Component {
  render(){
    return(
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbartitle} >MEMOT</Text>
        </View>
      </View>


    );
  }
}

const styles= StyleSheet.create({

  appbar: {
    position: 'absolute',
    top : 0,
    left:0,
    right:0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
  },
   appbartitle: {
     color:'#fff',
     fontSize: 18,
   },
});


export default Appbar;
