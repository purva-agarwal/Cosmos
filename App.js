import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBJb9mKjJ33nPBs0CO37rVbmMvvknxqkUA",
    authDomain: "cosmos-010.firebaseapp.com",
    databaseURL: "https://cosmos-010.firebaseio.com",
    projectId: "cosmos-010",
    storageBucket: "cosmos-010.appspot.com",
    messagingSenderId: "327137299886",
    appId: "1:327137299886:web:e67de334e24e88b2f64c3f",
    measurementId: "G-JGG9JPSYVX"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

import { Container, Content, Header, Form, Input, Item, Button, Label, Textarea } from 'native-base';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  signinUser = (email,password) => {
    
    try {
      firebase.auth().signInWithEmailAndPassword(email,password).then(function (user) {
        console.log(user)

      })
    }
    catch(error) {
      console.log(error.toString())
    }
  }

  signupUser = (email,password) => {
    try{
      if(this.state.password.length<6) {
        alert("Please enter atleast 6 characters")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email,password)
      alert("Registration Successful")
    }
    catch(error){
      console.log(error.toString());
    }    
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect = {false}
              autoCapitalize = "none"
              onChangeText={(email) => this.setState({email})}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry = {true}
              autoCorrect = {false}
              autoCapitalize = "none"
              onChangeText={(password) => this.setState({password})}
            />
          </Item>

          <Button style={styles.btn} 
            rounded 
            success
            onPress={()=> this.signinUser(this.state.email, this.state.password)}
            >
            <Text>Signin</Text>
          </Button>

          <Button style={styles.btn} 
            rounded 
            primary
            onPress={()=> this.signupUser(this.state.email, this.state.password)}
            >
            <Text>Signup</Text>
          </Button>

        </Form>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
  btn: {
    color: '#fff',
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    alignSelf: "center",
  },
});
