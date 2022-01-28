import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  constructor(private http : HttpClient ) { }

gettemp(city :any){
  return this.http.get("http://api.weatherstack.com/current?access_key=c25359abcbead851e8a3a681e295e037&query="+city,{observe:"response"})
}

}
