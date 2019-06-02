import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native'


const Register = () => <Text style={styles.header}>Register</Text>;


export default class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      email: "",
      password: "",
    }
  }
  onChangeText = (key, val) => {
    this.setState({ key : val })
  }
  
  async signUp() {
   await fetch('https://api.snapchat.wac.epitech.eu/inscription',{
     method: 'POST',
     headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "email": this.state.email,
    "password": this.state.password
  })
   }).then(result => result.json())
   .then(result => {
    if(result.data.email === undefined)
     Alert.alert("No");
     else
     Alert.alert("User registered");
    })
    .catch(function (error) {
      console.log("-------- error ------- "+error);
      alert("result:"+error)
});
}
 
  render() {

    let {email} = this.state;
    let {password} = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          title='Sign Up'
          onPress={this.signUp.bind(this)}
        />
      </View>
    )
  }
}



const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#000000',
    margin: 10,
    padding: 8,
    color: '#FFFFFF',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})