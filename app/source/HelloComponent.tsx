import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props {
  name: string
}

interface State { }

export class HelloComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <Text style={styles.text}>Hello {this.props.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

