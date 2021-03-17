//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to Plink. The mobile app for Airsoft Players and field owners.
        </Text>
      </View>
    );
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
