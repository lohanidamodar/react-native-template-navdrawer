import React from 'react';
import { StyleSheet } from 'react-native';
let styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 17,
      paddingBottom: 22,
    },
    textInput:{
        width: 200,
        padding: 8
    },
    footer: {
      justifyContent: 'flex-end',
      flex: 1
    },
    textRow: {
      justifyContent: 'center',
      flexDirection: 'row',
    }
  });

export default styles;