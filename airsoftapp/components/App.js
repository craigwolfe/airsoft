//import liraries
import React, {Component} from 'react';
import firebase from 'firebase';
import {View, StyleSheet} from 'react-native';
import LoginForm from './LoginForm';
import Articles from './Articles';
import Loading from './Loading';
//above image is background image of login screen

// create a component
class App extends Component {
  //create state for logged in status - current state is set to false
  state = {
    loggedIn: null,
  };

  componentDidMount() {
    // web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: 'AIzaSyB2IuCjDxWxaNvOt2zdUbbXzxL8Gp8sk80',
      authDomain: 'airsoft-app-37d5b.firebaseapp.com',
      databaseURL: 'https://airsoft-app-37d5b-default-rtdb.firebaseio.com',
      projectId: 'airsoft-app-37d5b',
      storageBucket: 'airsoft-app-37d5b.appspot.com',
      messagingSenderId: '52995122493',
      appId: '1:52995122493:web:35de99d160ba87727fd154',
      measurementId: 'G-LZZDTDND6Q',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    });
  }
  //if not logged in return loginform component, loggedin return Articles component
  renderContent = () => {
    switch (this.state.loggedIn) {
      case false:
        return (
          // <ImageBackground style={styles.container} source={BG}>
          <LoginForm />
          // </ImageBackground>
        );

      case true:
        return <Articles />;
      default:
        return <Loading />;
    }
  };
  render() {
    return <View style={styles.container}>{this.renderContent()}</View>;
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});

//make this component available to the app
export default App;
