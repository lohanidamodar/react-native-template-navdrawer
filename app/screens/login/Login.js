import React from 'react';
import { Button, TextInput, Text, View } from 'react-native';
import styles from './Styles';

class LoginScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Login'
    };
  
    render() {
      return (
        <View style={styles.screen}>
            <TextInput style={styles.textInput} placeholder='Username'/>
            <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true}/>
            <Button onPress={() => {
            this.props.navigation.goBack()}} title="LOGIN" />
            <View style={styles.footer}>
                <View style={styles.textRow}>
                    <Text>Don’t have an account?</Text>
                    <Text> Sign up now </Text>
                </View>
            </View>
        </View>
      );
    }
  }

export default LoginScreen;