import { Component } from '@angular/core';
import { TempService } from './service/gettemp/temp.service';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  images_location = "../assets/images/"
  subscribe : Subscription | undefined;
  data : any = {};
  enableDiv = false;
  imagesource : any;
  constructor(private s : TempService) {}

  search(){
    this.subscribe= this.s.gettemp($("#cityname").val()).subscribe((response:any)=>{
      console.log(response)
      this.data=response.body
      this.enableDiv=true
      if(this.data.current.weather_descriptions [0] == "Sunny" || "Clear" && (this.data.current.is_day == "yes")){
        this.imagesource= this.images_location+"sun.gif"
      }
      else{
        this.imagesource=this.images_location+"moon.gif"
      }
      
      if(this.data.current.weather_descriptions [0] == "Light Rain Shower" || "Light drizzle")
      {
        this.imagesource= this.images_location+"raining.gif"
      }
      if(this.data.current.weather_descriptions[0] == "Light Snow"){
        this.imagesource= this.images_location+"snow.gif"
      }

    },(error:any)=>{
      console.log(error)
    })
  }
}
