import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight } from 'react-native';

class LoginScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput style={styles.input} value="Email Adress" />
        <TextInput style={styles.input} value="Password" />
        <TouchableHighlight style={styles.botton}  onPress={()=>{}}>
          <Text style={styles.bottontitle}>ログインする</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    padding:24,
    backgroundColor:'#fff'
  },
  input:{
    backgroundColor:'#ddd',
    height:48,
    marginBottom:16,
    borderWidth:1,
    borderColor:'#DDD',
    padding:8,
  },
  title:{
    fontSize:28,
    alignSelf:'center',
    marginBottom:24,
  },
  botton:{
    backgroundColor:'#F0F',
    height:48,
    borderRadius:14,
    justifyContent:'center',
    alignItems:'center',
    width:'70%',
    alignSelf:'center',
  },
  bottontitle:{
    color:'#fff',
    fontSize:18,
  },
});

export default LoginScreen;
