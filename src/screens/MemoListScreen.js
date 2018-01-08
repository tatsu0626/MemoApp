import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from '../components/MemoList';
import Circlebotton from '../elements/Circlebotton';


class MemoListScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <Circlebotton onPress={()=>{this.props.navigation.navigate('MemoEdit');}}>
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
