import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from '../components/MemoList';
import Circlebotton from '../elements/Circlebotton';
import firebase from 'firebase';


class MemoListScreen extends React.Component{
  state={
    memolist:[],
  }
  componentWillMount(){
    const{currentUser}=firebase.auth();
    firebase.firestore().collection(`users/${currentUser.uid}/memos`)
    .get()
    .then((querySnapshot)=>{
      const memoList=[];
      querySnapshot.forEach((doc)=>{
        console.log(doc.data());
        memoList.push(doc.data());
      });
      this.setState({memoList:memolist})
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  handlePress(){
    this.props.navigation.navigate('MemoCreate');
  }
  render(){
    return(
      <View style={styles.container}>
        <MemoList memolist={this.state.memolist} navigation={this.props.navigation} />
        <Circlebotton onPress={this.handlePress.bind(this)}>
          <Text style={styles.bottontext}>+</Text>
        </Circlebotton>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor:'#FFFDF6'
  },
  bottontext:{
    color:'white',
    fontSize:36,
    alignSelf:'center',
    fontWeight:'bold',
  },
});

export default MemoListScreen;
