import React, {Component} from 'react';
import firebase from 'firebase';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

//create a component
class EmailAndPassword extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess)
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  };
  onLoginSuccess = () => {
    this.setState({
      error: '',
      loading: false,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          placeholder="password"
          style={styles.input}
          secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={this.onButtonPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.errorText}>{this.state.error}</Text>
      </View>
    );
  }
}
// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    height: 40,
    paddingLeft: 5,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 15,
    backgroundColor: 'rgb(242, 242, 242)',
    borderWidth: 1,
    borderColor: '#808080',
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  btnContainer: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
});

export default EmailAndPassword;
