//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import BG from '../images/logo.jpg';

// create a component
const Logo = () => {
  return (
    // retrieves logo from components folder
    <View style={styles.container}>
      <Image source={BG} style={styles.LogoImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    // align items vertical
    justifyContent: 'center',
    // align items horizontal
  },
  LogoImg: {
    marginTop: 80,
    height: 200,
    width: 200,
  },
});
//make this component available to the app
export default Logo;
