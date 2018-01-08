import React from 'react';
import { StyleSheet,Text,View,TextInput,Button,TouchableHighlight } from 'react-native';
import firebase from 'firebase';

class LoginScreen extends React.Component{
  state={
    email:'',
    password:'',
  }
  handleSubmit(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((user)=>{
      console.log('success!',user);
      this.props.navigation.navigate('Home');
    })
    .catch((error)=>{
      console.log('error!');
    })
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text)=>{this.setState({email:text});}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Adress"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text)=>{this.setState({password:text});}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
      <TouchableHighlight style={styles.botton}  onPress={this.handleSubmit.bind(this)}>
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
