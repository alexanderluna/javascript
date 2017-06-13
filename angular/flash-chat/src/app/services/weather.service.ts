import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class WeatherService {

  private baseURL:string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private app_id:string = '&appid=e72ca729af228beabd5d20e3b7749713';
  private units:string = '&units=metric';

  constructor(private http:Http) {}

  getWeather(city:string) {
    console.log("City received");
    return this.http.get(this.baseURL + city + this.app_id + this.units)
    //.map(this.extractData);
  }

  getWeatherCityInfo(city:string){
    return this.http.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${city}&limit=1&namespace=0&format=json`)
  }

  extractData(res:Response){
    let body = res.json();
    return body.data || { };
  }
}
