import {NasaPhoto} from "app/source/model/NasaPhoto"

export class NasaPhotoAdapter {
  adapt(json: any): NasaPhoto {
    if (this.isAValid(json)) {
      return new NasaPhoto(json.title, json.date, json.explanation, json.url)
    }
    return NasaPhoto.empty()
  }

  private isAValid(json: any) {
    return json.title && json.date && json.explanation && json.url
  }
}
