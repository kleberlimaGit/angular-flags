import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataCountry } from '../model/data-country';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlagServiceService {

  private url: string = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  public findFlags(): Observable<DataCountry[]> {
    return this.http.get<DataCountry[]>("https://restcountries.com/v3.1/all");
  }

}
