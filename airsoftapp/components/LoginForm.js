//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Logo from './Logo';
import EmailAndPassword from './EmailAndPassword';

// create a component
const LoginForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.emailAndPassword}>
        <EmailAndPassword />

        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.alreadyLoginText}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailAndPassword: {
    flex: 2,
  },
  linkContainer: {
    flex: 2,
    alignSelf: 'center',
  },
});

//make this component available to the app
export default LoginForm;
