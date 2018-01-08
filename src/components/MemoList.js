import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';

class MemoList extends React.Component {
  render(){
    return(
      <View style={styles.memolist}>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
          <View style={styles.memolistitem}>
            <Text style={styles.memotitle}>講座のアイディア</Text>
            <Text style={styles.memodate}>2018/1/10</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
          <View style={styles.memolistitem}>
            <Text style={styles.memotitle}>講座のアイディア</Text>
            <Text style={styles.memodate}>2018/1/10</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
          <View style={styles.memolistitem}>
             <Text style={styles.memotitle}>講座のアイディア</Text>
             <Text style={styles.memodate}>2018/1/10</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
          <View style={styles.memolistitem}>
              <Text style={styles.memotitle}>講座のアイディア</Text>
              <Text style={styles.memodate}>2018/1/10</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')}}>
          <View style={styles.memolistitem}>
              <Text style={styles.memotitle}>講座のアイディア</Text>
              <Text style={styles.memodate}>2018/1/10</Text>
            </View>
        </TouchableHighlight>

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
