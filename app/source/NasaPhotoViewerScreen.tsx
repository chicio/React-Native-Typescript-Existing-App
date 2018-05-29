import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HelloComponent} from "app/source/HelloComponent"
import {NasaPhotoComponentPresenter} from "app/source/presenter/NasaPhotoComponentPresenter"
import {NasaPhotoRepository} from "app/source/model/NasaPhotoRepository"
import {NasaPhotoService} from "app/source/model/NasaPhotoService"
import {NasaPhotoAdapter} from "app/source/model/NasaPhotoAdapter"
import {NasaPhotoView} from "app/source/view/NasaPhotoView"
import {NasaPhoto} from "app/source/model/NasaPhoto"

interface Props {
  name: string
}

interface State { }

export class NasaPhotoViewerScreen extends React.Component<Props, State> implements NasaPhotoView {
  private readonly presenter: NasaPhotoComponentPresenter

  constructor(props: Props) {
    super(props)
    this.presenter = new NasaPhotoComponentPresenter(
      this,
      new NasaPhotoRepository(new NasaPhotoService(), new NasaPhotoAdapter())
    )
  }

  componentWillMount() {
    this.presenter.onStart()
  }

  showAn(error: string): void {
    console.log(error)
  }

  showValid(photo: NasaPhoto): void {
    console.log(photo)
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

