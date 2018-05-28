import {NasaPhoto} from "app/source/model/NasaPhoto"

export interface NasaPhotoView {
  showValid(photo: NasaPhoto): void
  showAn(error: string): void
}
