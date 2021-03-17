//import liraries
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import LoginForm from './LoginForm';
import Articles from './Articles';
import Logo from './Logo';

// create a component
class App extends Component {
  //create state for logged in status - current state is set to false
  state = {
    loggedIn: false,
  };
  //if not logged in return loginform component, loggedin return Articles component
  renderContent = () => {
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm />;
      case true:
        return <Articles />;
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
    alignItems: 'center',
  },
});

//make this component available to the app
export default App;
