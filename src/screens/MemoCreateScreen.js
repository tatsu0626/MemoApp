import React from 'react';
import { StyleSheet,Text,View,TextInput } from 'react-native';
import Circlebotton from '../elements/Circlebotton';
import firebase from 'firebase';

class MemoCreateScreen extends React.Component{
  state={
    body:'',
  }
  handlePress(){
    const db=firebase.firestore();
    const {currentUser} = firebase.auth()
    db.collection(`users/${currentUser.uid}/memos`).add({
      body:this.state.body,
      createdOn:new Date(),
    })
    .then((docRef)=>{
      console.log(docRef.id);
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  render(){
    return(
      <View style={styles.container}>
      <TextInput
      style={styles.memoeditInput}
      multiline
      value={this.state.body}
      onChangeText={(text)=>{this.setState({body:text});}}
      />
        <Text>Hi!!</Text>
      <Circlebotton onPress={this.handlePress.bind(this)}>
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

export default MemoCreateScreen;
