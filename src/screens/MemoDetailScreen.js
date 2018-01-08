import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Circlebotton from '../elements/Circlebotton'

class MemoDetailScreen extends React.Component{
  render(){
    return(
    <View style={styles.container}>
      <View>
       <View style={styles.MemoHeader}>
        <View>
          <Text style={styles.MemoHeaderTitle}>講座のアイディア</Text>
          <Text style={styles.MemoHeaderDate}>2018/1/7</Text>
        </View>
       </View>
      </View>

      <View style={styles.MemoContents}>
        <Text>
           講座のアイディアです。
        </Text>
      </View>

      <Circlebotton color="white" style={styles.editBotton} onPress={()=>{this.props.navigation.navigate('MemoEdit')}}>
        <Text style={styles.bottontext} >✑</Text>
      </Circlebotton>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
  },
  MemoHeader:{
    height: 100,
    backgroundColor:'#17313C',
    justifyContent:'center',
    padding: 10,
  },
  MemoHeaderTitle:{
    fontSize: 20,
    fontWeight:'bold',
    color:'#fff',
    marginBottom:4,
},
  MemoHeaderDate:{
    fontSize: 12,
    color:'#fff'

  },
  MemoContents:{
    paddingTop:30,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    backgroundColor: '#fff',
    flex:1,
  },
  editBotton:{
    top:75,
  },
  bottontext:{
    fontSize:30,
    color:'pink',
  },
});


export default MemoDetailScreen;
