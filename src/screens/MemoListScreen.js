import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from '../components/MemoList';
import Circlebotton from '../elements/Circlebotton';


class MemoListScreen extends React.Component{
  handlePress(){
    const {params}=this.props.navigation.state;
    this.props.navigation.navigate('MemoCreate',{currentUser:params.currentUser});
  }
  render(){
    return(
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
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
