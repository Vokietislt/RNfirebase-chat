import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import {  Text, View, Button as RNButton,TouchableOpacity ,TextInput} from 'react-native';

import Firebase from '../config/firebase';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(Firebase);

const LoginScreen = ({ navigation })=> {
  const [email, setEmail] = useState('pnlaimonas2@gmail.com');
  const [password, setPassword] = useState('adminas');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [loginError, setLoginError] = useState('');

  const firebaseLogin = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    });
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <StatusBar style='dark-content' />
    <View style={styles.lentele}>
        <Text> email </Text>
        <TextInput
        defaultValue={email}
        onChange={setEmail}
        />
        <Text> password</Text>
        <TextInput
        defaultValue={password}
        onChange={setPassword}
        />
        <TouchableOpacity
        onPress={()=>{firebaseLogin()}}
        style={styles.btn}
        > Login </TouchableOpacity>
      </View>
    </View>
  );
}
export default LoginScreen 

const styles = {

  lentele:{
    width:600,
    height:600,
    maxWidth:'100%',
    maxHeight:'100%',
    borderWidth:8,
    borderColor: '#4c4747',
    borderRadius:12,
    backgroundColor:'#6e6767',
    justifyContent:'center',
    alignItems:'center'
  },
  btn:{
    backgroundColor:'black',
    maxWidth:320,
    width:'90%',
  }
}