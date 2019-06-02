import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,} from 'react-native';
import Register from "./views/register";
import Login from "./views/login"
import Home from "./views/home"
import {Image} from 'react-native' ; 
import {NativeRouter, Route, Link, Switch} from 'react-router-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>

        <Routing/>
      </View>
    );
  }
}

const Routing = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
      <Image
         style={{width: 70, height: 70}}
          source={require('./views/snap.png')}
        />

        <Link to="/login" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>Login</Text>
        </Link>

        <Link to="/register" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Register</Text>
        </Link>
      </View>


    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={Register} />
    </Switch>

    </View>
  </NativeRouter>
);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
