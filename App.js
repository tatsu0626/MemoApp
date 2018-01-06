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

        <View>
          <Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
    position: 'absolute',
    top : 0,
    left:0,
    right:0,
    height: 60,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
  },
   appbartitle: {
     color:'#fff',
     fontSize: 18,
   },
});
