import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

class BodyText extends React.Component{
  render(){
    return(
        <View>
          <Text style={styles.Text} >
           {this.props.children}
          </Text>
        </View>
      );
  }
}

const styles=StyleSheet.create({
     Text:{
       color:'black',
       backgroundColor:'#eee',
     },
});

export default BodyText;
