import {NasaPhotoService} from "app/source/model/NasaPhotoService"
import {NasaPhotoAdapter} from "app/source/model/NasaPhotoAdapter"
import {NasaPhoto} from "app/source/model/NasaPhoto"

export class NasaPhotoRepository {
  private readonly nasaPhotoService: NasaPhotoService
  private readonly nasaPhotoAdapter: NasaPhotoAdapter

  constructor(nasaPhotoService: NasaPhotoService, nasaPhotoAdapter: NasaPhotoAdapter) {
    this.nasaPhotoService = nasaPhotoService
    this.nasaPhotoAdapter = nasaPhotoAdapter
  }

  async load(): Promise<NasaPhoto> {
    try {
      const json = await this.nasaPhotoService.retrieve()
      return this.nasaPhotoAdapter.adapt(json)
    } catch(error) {
      return error
    }
  }
}
