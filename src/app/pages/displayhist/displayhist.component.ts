import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/Weatherdata';
import { PlayfabService } from 'src/app/services/playfab.service';

@Component({
  selector: 'app-displayhist',
  templateUrl: './displayhist.component.html',
  styleUrls: ['./displayhist.component.css']
})
export class DisplayhistComponent implements OnInit {

  constructor(private service: PlayfabService) { }
  ngOnInit(): void {
    this.getWeatherhistory();
    throw new Error('Method not implemented.');
  }

  weatherList: WeatherData[] ;

  getWeatherhistory(){
    this.service.geWeatherData().subscribe((resultdata: WeatherData[])=> {
             console.log(resultdata);
             resultdata.forEach((value) => {
              console.log(value.main.temp);
             })
             this.weatherList = resultdata;
    })

  }


}
