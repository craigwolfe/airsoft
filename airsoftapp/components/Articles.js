//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import Loading from './Loading';

// create a component
const Articles = () => {
  return (
    <View style={styles.container}>
      <View style={styles.articlesContainer}>
        <Text style={styles.heading}>Welcome to the authorized screen</Text>
        <Text style={styles.content}>You are logged in from firebase</Text>
      </View>

      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => firebase.auth().signOut()}>
        <Text style={styles.btnText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  articlesContainer: {
    padding: 10,
    borderBottomColor: 'rgba(255,255,255,.7)',
    borderBottomWidth: 5,
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    color: 'black',
    paddingBottom: 10,
    marginBottom: 10,
  },
  content: {
    marginTop: 10,
    fontSize: 19,
  },
  btnContainer: {
    width: 200,
    height: 50,
    backgroundColor: 'black',
    marginTop: 5,
    padding: 5,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    alignSelf: 'center',
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Articles;
