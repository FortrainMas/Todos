import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './windows/main';


export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '10%',
    paddingTop:'20%'
  },
});
