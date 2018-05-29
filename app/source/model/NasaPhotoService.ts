export class NasaPhotoService {
  async retrieve(): Promise<any> {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=1cygunHJsSwDug6zJjF3emev3QAP8yFLppohLuxb')
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }
}
