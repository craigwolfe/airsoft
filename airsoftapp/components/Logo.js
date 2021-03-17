//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

// create a component
const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: './images/sml_logo1.png'}}>Logo screen</Image>
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
});

//make this component available to the app
export default Logo;
