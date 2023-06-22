import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Route, Router } from '@angular/router';
import { Bodyreq } from 'src/app/models/Bodyreq';
import { WeatherData } from 'src/app/models/Weatherdata';
import { LocationResponse } from 'src/app/models/locationresponse';
import { PlayfabService } from 'src/app/services/playfab.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  
    constructor(private route: Router,private playfab: PlayfabService){}

  ngOnInit(): void {
   
    
  }
result?: LocationResponse;
long: number; 
lat: number;
tempData: String[] = [];
weather: String ="";


getLogOut(){
 this.route.navigate(['/home']);
}
getPlayerName(){

}
getHistory(){
   this.playfab.geWeatherData().subscribe((result:WeatherData[]) =>{
        console.log(" my reuslt " +result);
        
        result.forEach((item:any) => {
          console.log(item);
          this.tempData.push(item.main.temp);
        }) 
        console.log(this.tempData);
        
   })
}


  getLocation(){
   

  const getLocation = () => {
    const status:any = document.querySelector('.status');

    const sucess = (position: any)=>{
      console.log(position);
      this.result = position;
      // console.log(this.result?.coords.latitude);

      this.long=this.result.coords.longitude;
      this.lat= this.result.coords.latitude;
      console.log("My long and lat : "+this.lat+ this.long);
      const bodyreq : Bodyreq={
        longt:  this.long,
        lat: this.lat
      }
      this.playfab.getCallSaveLocation(bodyreq).subscribe((res: any) => {
             console.log(res);
      });
      
    }
    

    const error = () => {
      status.textContent = "unable to locate add";

    }
    navigator.geolocation.getCurrentPosition(sucess,error);
  }
  document.querySelector('.find-state').addEventListener('click', getLocation);

 

}

}
