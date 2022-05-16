import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

import { IconButton } from '../components/IconButton';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import Firebase from '../config/firebase';
import { getAuth } from "firebase/auth";
import Chat from './Chat';
const auth = getAuth(Firebase);

export default function HomeScreen({navigation}) {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <View style={styles.row}>
        <Text style={styles.title}>Welcome {user.email}!</Text>
        <TouchableOpacity
          size={24}
style={styles.btn}
          onPress={handleSignOut}
        >LogOut</TouchableOpacity>
      </View>
      <Chat navigation={navigation}/>
      <Text style={styles.text}>Your UID is: {user.uid} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e93b81',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff'
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  },
  btn:{
    backgroundColor:'white',
    padding:20,
    borderRadius:12,
  }
});