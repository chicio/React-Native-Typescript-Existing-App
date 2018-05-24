import {Mock} from "typemoq";

class NasaPhotoComponentPresenterTest {
  private nasaPhotoRepository: NasaPhotoRepository

  constructor(nasaPhotoService: NasaPhotoRepository) {
    this.nasaPhotoRepository = nasaPhotoService
  }

  onStart() {
    return this.nasaPhotoRepository.load()
  }
}

class NasaPhoto {
  public readonly title: string

  constructor(title: string) {
    this.title = title
  }
}

class NasaPhotoRepository {
  load(): NasaPhoto {
    return new NasaPhoto("")
  }
}

describe('NasaPhotoComponentPresenterTest', () => {
  it('test', function () {
    const nasaPhotoService = Mock.ofType<NasaPhotoRepository>()
    nasaPhotoService
      .setup(it => it.load())
      .returns(() => new NasaPhoto("title"))

    const nasaPhotos = new NasaPhotoComponentPresenterTest(nasaPhotoService.object).onStart()

    expect(nasaPhotos).toEqual(new NasaPhoto("title"))
  });
});


