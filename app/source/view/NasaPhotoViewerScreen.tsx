import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {NasaPhotoComponentPresenter} from "app/source/presenter/NasaPhotoComponentPresenter"
import {NasaPhotoRepository} from "app/source/model/NasaPhotoRepository"
import {NasaPhotoService} from "app/source/model/NasaPhotoService"
import {NasaPhotoAdapter} from "app/source/model/NasaPhotoAdapter"
import {NasaPhotoView} from "app/source/view/NasaPhotoView"
import {NasaPhoto} from "app/source/model/NasaPhoto"
import {NasaPhotoInformationComponent} from "app/source/view/NasaPhotoInformationComponent"

export class NasaPhotoViewerScreen extends React.Component<Props, State> implements NasaPhotoView {
  private readonly presenter: NasaPhotoComponentPresenter

  constructor(props: Props) {
    super(props)
    this.state = {
      photo: NasaPhoto.empty()
    }
    this.presenter = new NasaPhotoComponentPresenter(
      this,
      new NasaPhotoRepository(new NasaPhotoService(), new NasaPhotoAdapter())
    )
  }

  componentWillMount() {
    this.presenter.onStart()
  }

  showAn(error: string): void {
    alert(error)
  }

  showValid(photo: NasaPhoto): void {
    this.setState({photo})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: this.state.photo.url}}
        />
        <NasaPhotoInformationComponent
          title={this.state.photo.title}
          date={this.state.photo.date}
          description={this.state.photo.description}
        />
      </ScrollView>
    );
  }
}

interface Props {
  name: string
}

interface State {
  photo: NasaPhoto
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  image: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
  }
});

