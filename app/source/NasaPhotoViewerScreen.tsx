import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HelloComponent} from "app/HelloComponent"

interface Props {
  name: string
}

interface State {}

export class NasaPhotoViewerScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <HelloComponent name={"Chicio"}/>
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
});

