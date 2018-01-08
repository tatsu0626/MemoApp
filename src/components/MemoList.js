import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight,FlatList } from 'react-native';

const dateString=(date)=>{
  const str=date.toISOString();
  return str.split('T')[0];
};


class MemoList extends React.Component {
  renderMemo({item}) {
    console.log(item);
    return(
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail',{memo:item});}}>
          <View style={styles.memolistitem}>
            <Text style={styles.memotitle}>{item.body.substring(0,10)}</Text>
            <Text style={styles.memodate}>{dateString(item.createdOn)}</Text>
          </View>
        </TouchableHighlight>
      );
  }

  render(){
    return(
      <View style={styles.memolist}>
      <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
      </View>

    );
  }
}


const styles = StyleSheet.create({
  memolist: {
    backgroundColor: '#eee',
    width: '100%',
    flex: 1,
  },
  memolistitem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff'
  },
  memotitle: {
    fontSize:18,
    marginBottom: 4,
  },
  memodate: {
     fontSize: 12,
     color: '#b9b4b4',
  },
});

export default MemoList;
