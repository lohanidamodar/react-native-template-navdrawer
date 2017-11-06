import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './Styles';

class HomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home'
    };
  
    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Hello World React Native Template
            </Text>
            <Button
            onPress={() => this.props.navigation.navigate('Login')}
            title="Go to Login"
            />
        </View>
      );
    }
  }

export default HomeScreen;