import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataCountry } from '../model/data-country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  private url: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  public findFlags(): Observable<DataCountry[]> {
    return this.http.get<DataCountry[]>(this.url+"all");
  }


  public findFlagByName(flagName: string): Observable<DataCountry[]> {
    return this.http.get<DataCountry[]>(`${this.url}/name/${flagName}`);
  }

}
