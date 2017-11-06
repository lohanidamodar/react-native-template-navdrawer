import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/home/Home';
import LoginScreen from './screens/login/Login';

const App = DrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Login: {
        screen: LoginScreen,
    },
});

export default App;