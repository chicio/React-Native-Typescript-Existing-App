import {NasaPhoto} from "../../source/model/NasaPhoto"
import {NasaPhotoAdapter} from "../../source/model/NasaPhotoAdapter"

describe('NasaPhotoAdapter', () => {
  let nasaPhotoAdapter: NasaPhotoAdapter

  beforeEach(() => {
    nasaPhotoAdapter = new NasaPhotoAdapter()
  });

  describe('adapts', () => {
    it('a valid nasa photo json', () => {
      const nasaPhoto = nasaPhotoAdapter.adapt(aNasaPhotoJson())

      expect(nasaPhoto).toEqual(new NasaPhoto(
        "The Gum Nebula Expanse",
        "2018-05-24",
        "Description....",
        "https://apod.nasa.gov/apod/image/1805/GumExpanseGleason1024.jpg"
      ))
    });

    it("an invalid photo json", () => {
      const nasaPhoto = nasaPhotoAdapter.adapt({})

      expect(nasaPhoto).toEqual(NasaPhoto.empty())
    });
  });

  const aNasaPhotoJson = (): any => {
    return {
      "copyright": "John Gleason",
      "date": "2018-05-24",
      "explanation": "Description....",
      "hdurl": "https://apod.nasa.gov/apod/image/1805/GumExpanseGleason.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Gum Nebula Expanse",
      "url": "https://apod.nasa.gov/apod/image/1805/GumExpanseGleason1024.jpg"
    }
  }
});
