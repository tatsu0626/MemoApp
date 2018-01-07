import React from 'react';
import { StyleSheet,Text,View,TextInput } from 'react-native';
import Circlebotton from '../elements/Circlebotton';

class MemoEditScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <TextInput style={styles.memoeditInput} multiline value='Hi!!' />
        <Text>Hi!!</Text>
      <Circlebotton>
        <Text styke={styles.checkmark}>✔</Text>
      </Circlebotton>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
  },
  memoeditInput:{
    backgroundColor:'#fff',
    flex:1,
    padding:16,
    paddingTop:32,
    paddingLeft:16,
    paddingRight:16,
    paddingBottom:16,
    fontSize:16,
  },
  checkmark:{
    color:'white',
  },

});

export default MemoEditScreen;
