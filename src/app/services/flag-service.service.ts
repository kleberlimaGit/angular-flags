import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagServiceService {

  private url: string = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  public findFlags(){
     this.http.get<any>(this.url).subscribe(res => console.log(res))
  }

}
