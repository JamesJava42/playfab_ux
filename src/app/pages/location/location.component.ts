import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LocationResponse } from 'src/app/models/locationresponse';
import { PlayfabService } from 'src/app/services/playfab.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  long:any=0;
    lat:any=0;
    constructor(private route: Router,private playfab: PlayfabService){}

  ngOnInit(): void {
    
  }
result?: LocationResponse;


getLogOut(){
 this.route.navigate(['/home']);
}
getPlayerName(){

}
getHistory(){
   this.playfab.getCallPlayFabHistory().subscribe((result:any) =>{
        console.log(result);
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
      
    }
    

    const error = () => {
      status.textContent = "unable to locate add";

    }
    navigator.geolocation.getCurrentPosition(sucess,error);
  }
  document.querySelector('.find-state').addEventListener('click', getLocation);

 

}

}
