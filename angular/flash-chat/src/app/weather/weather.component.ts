import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city:string;
  jsonData:any;
  jsonWikiData:any;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
  }

  getWeatherData() {
    console.log(this.city);
    this.weather.getWeather(this.city).subscribe( data => {
      console.log(data.json());
      this.jsonData = data.json();
    });

    // this.weather.getWeatherCityInfo(this.city).subscribe( data => {
    //   console.log(data.json());
    //   this.jsonWikiData = data.json();
    // });

    this.city = "";
  }

}
