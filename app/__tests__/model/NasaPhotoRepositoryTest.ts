import {NasaPhotoRepository} from "../../source/model/NasaPhotoRepository"
import {NasaPhoto} from "../../source/model/NasaPhoto"
import {IMock, Mock} from "typemoq";
import {NasaPhotoService} from "../../source/model/NasaPhotoService"
import {NasaPhotoAdapter} from "../../source/model/NasaPhotoAdapter"

describe('NasaPhotoRepository', () => {
  let nasaPhotoService: IMock<NasaPhotoService>
  let nasaPhotoAdapter: IMock<NasaPhotoAdapter>
  let nasaPhotoRepository: NasaPhotoRepository

  beforeEach(() => {
    nasaPhotoService = Mock.ofType<NasaPhotoService>()
    nasaPhotoAdapter = Mock.ofType<NasaPhotoAdapter>()
    nasaPhotoRepository = new NasaPhotoRepository(nasaPhotoService.object, nasaPhotoAdapter.object)
  });

  describe('loads a nasa photo', () => {
    it('correctly', async () => {
      nasaPhotoService
        .setup(it => it.retrieve())
        .returns(() => Promise.resolve(aNasaPhotoJson()))
      nasaPhotoAdapter
        .setup(it => it.adapt(aNasaPhotoJson()))
        .returns(() => aNasaPhoto())

      const nasaPhoto = await nasaPhotoRepository.load()

      expect(nasaPhoto).toEqual(aNasaPhoto())
    });

    it("with network error", async () => {
      nasaPhotoService
        .setup(it => it.retrieve())
        .returns(() => Promise.reject("network error"))
      nasaPhotoAdapter
        .setup(it => it.adapt(aNasaPhotoJson()))
        .returns(() => aNasaPhoto())

      const nasaPhoto = await nasaPhotoRepository.load()

      expect(nasaPhoto).toEqual(NasaPhoto.empty())
    });
  });

  const aNasaPhoto = (): NasaPhoto => {
    return new NasaPhoto("::title::", "::date::", "::description::", "::url::")
  }

  const aNasaPhotoJson = (): any => {
    return {fake: ""}
  }
});
