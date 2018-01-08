import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Circlebotton from '../elements/Circlebotton'

const dateString=(date)=>{
  const str=date.toISOString();
  return str.split('T')[0];
};

class MemoDetailScreen extends React.Component{
  state={
    memo:{},
  }

  componentWillMount(){
    const{params}=this.props.navigation.state;
    this.setState({memo:params.memo})
  }

  render(){
    const{memo}=this.state;
    return(
    <View style={styles.container}>
      <View>
       <View style={styles.MemoHeader}>
        <View>
          <Text style={styles.MemoHeaderTitle}>{memo.body.substring(0,10)}</Text>
          <Text style={styles.MemoHeaderDate}>{dateString(memo.createdOn)}</Text>
        </View>
       </View>
      </View>

      <View style={styles.MemoContents}>
        <Text style={styles.memobody}>
           {memo.body}
        </Text>
      </View>

      <Circlebotton
        color="white"
        style={styles.editBotton}
        onPress={()=>{this.props.navigation.navigate('MemoEdit',{memo})}}
      >
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
  memobody:{
    lineHeight:22,
    fontSize:15,
  },
});


export default MemoDetailScreen;
