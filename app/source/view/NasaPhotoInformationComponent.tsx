import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  title: string
  date: string
  description: string
}

interface State { }

export class NasaPhotoInformationComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.date}>{this.props.date}</Text>
        <Text style={styles.description}>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15
  },
  text: {
    marginTop: 10,
    marginHorizontal: 20
  },
  title: {
    marginTop: 10,
    fontSize: 32,
    textAlign: 'center',
  },
  date: {
    marginTop: 10,
    fontSize: 24,
  },
  description: {
    marginTop: 10,
    fontSize: 14,
  }
});

