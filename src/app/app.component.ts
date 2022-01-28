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
  subscribe : Subscription | undefined;
  data : any = {};
  enableDiv = false;
  constructor(private s : TempService) {}

  search(){
    this.subscribe= this.s.gettemp($("#cityname").val()).subscribe((response:any)=>{
      console.log(response)
      this.data=response.body
      this.enableDiv=true

    },(error:any)=>{
      console.log(error)
    })
  }
}
