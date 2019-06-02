import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import {NativeRouter, Route, Link, Switch, Redirect} from 'react-router-native';



export default class App extends Component {

  state = {
    email: '',
    password: '',
    token: undefined
  };
  
  onLogin = async () => {
    const user = {
      email:this.state.email,
      password: this.state.password,
    };

    console.log(user);

     const log = await fetch('https://api.snapchat.wac.epitech.eu/connection',{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(res => {
        return res.data;
      })
      .catch(function (error) {
        console.log("-------- error ------- "+error);
        alert("result:"+error)
      });

      if (log.token) {
        this.setState({token :log.token});
        
      } else {
        alert('you are not connected');
      }
  }



  

  render() {

    let {email} = this.state;
    let {password} = this.state;

    if (this.state.token) {
      console.log('redirection');
      return  <Redirect to="/home"/>

    }

    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
          placeholderTextColor='white'
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          placeholderTextColor='white'
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin}
        />
      </View>
    );
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
  