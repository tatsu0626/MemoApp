import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbartitle} >MEMOT</Text>
          </View>
        </View>

        <View style={styles.memolist}>
          <View style={styles.memolistitem}>
            <Text style={styles.memotitle}>講座のアイディア</Text>
            <Text style={styles.memodate}>2018/1/10</Text>
          </View>

          <View style={styles.memolistitem}>
            <Text style={styles.memotitle}>講座のアイディア</Text>
            <Text style={styles.memodate}>2018/1/10</Text>
          </View>

          <View style={styles.memolistitem}>
            <Text style={styles.memotitle}>講座のアイディア</Text>
            <Text style={styles.memodate}>2018/1/10</Text>
          </View>

          <View style={styles.memolistitem}>
            <Text style={styles.memotitle}>講座のアイディア</Text>
            <Text style={styles.memodate}>2018/1/10</Text>
          </View>

          <View style={styles.memolistitem}>
            <Text style={styles.memotitle}>講座のアイディア</Text>
            <Text style={styles.memodate}>2018/1/10</Text>
          </View>

        </View>

        <View style={styles.memoaddbotton}>
          <Text style={styles.memoaddbottonTitle}>
            +
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:78,
    shadowColor:'#000',
    shadowOffset: {width:0,height:0},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    zIndex: 10,
  },
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
   memoaddbotton:{
     position: 'absolute',
     bottom: 32,
     right: 32,
     width: 48,
     height: 48,
     backgroundColor: '#f765a0',
     borderRadius: 24,
     justifyContent: 'center',
     alignItems: 'center',
   },
   memoaddbottonTitle: {
     fontSize: 32,
     lineHeight: 32,
     color: 'white',
   }
});
