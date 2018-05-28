import {Mock, IMock, Times} from "typemoq";
import {NasaPhotoComponentPresenter} from "../../source/presenter/NasaPhotoComponentPresenter"
import {NasaPhotoView} from "../../source/view/NasaPhotoView"
import {NasaPhotoRepository} from "../../source/model/NasaPhotoRepository"
import {NasaPhoto} from "../../source/model/NasaPhoto"

describe('NasaPhotoComponentPresenter', () => {
  let nasaPhotoView: IMock<NasaPhotoView>
  let nasaPhotoComponentPresenter: NasaPhotoComponentPresenter
  let nasaPhotoRepository: IMock<NasaPhotoRepository>

  beforeEach(() => {
    nasaPhotoView = Mock.ofType<NasaPhotoView>()
    nasaPhotoRepository = Mock.ofType<NasaPhotoRepository>()
    nasaPhotoComponentPresenter = new NasaPhotoComponentPresenter(nasaPhotoView.object, nasaPhotoRepository.object)
  });

  describe('starts', () => {
    it('and returns a valid nasa photo', async () => {
      nasaPhotoRepository
        .setup(it => it.load())
        .returns(() => Promise.resolve(aNasaPhoto()))

      await nasaPhotoComponentPresenter.onStart()

      nasaPhotoView.verify(it => it.showValid(aNasaPhoto()), Times.once())
    });

    it("and returns an error", async () => {
      nasaPhotoRepository
        .setup(it => it.load())
        .returns(() => Promise.reject("Network error"))

      await nasaPhotoComponentPresenter.onStart()

      nasaPhotoView.verify(it => it.showAn("Network error"), Times.once())
    });
  });

  const aNasaPhoto = (): NasaPhoto => {
    return new NasaPhoto("::title::", "::date::", "::description::", "::url::")
  }
});


