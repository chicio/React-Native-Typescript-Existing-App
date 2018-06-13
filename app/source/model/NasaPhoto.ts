export class NasaPhoto {
  public readonly title: string
  public readonly date: string
  public readonly description: string
  public readonly url: string

  constructor(title: string, date: string, description: string, url: string) {
    this.title = title
    this.date = date
    this.description = description
    this.url = url
  }

  static empty() {
    return new NasaPhoto("", "", "", "http://via.placeholder.com/400x220&text=loading...")
  }
}
