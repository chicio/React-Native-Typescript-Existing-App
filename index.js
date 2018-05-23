import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

class BlueComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello RN!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF',
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

AppRegistry.registerComponent('BlueComponent', () => BlueComponent);
