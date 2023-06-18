import { Component, OnInit } from '@angular/core';
import { DataCountry } from 'src/app/model/data-country';
import { FlagService } from 'src/app/services/flag-service.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public flags: DataCountry[] = [];
  public setFlags: DataCountry[] = [];
  public faEye = faEye

  constructor(private flagService: FlagService) {}
  ngOnInit(): void {
    this.flagService.findFlags().subscribe((data: DataCountry[]) => {
      this.setFlags = data.sort((a: DataCountry, b: DataCountry) => {
        if (a.name.common > b.name.common) {
          return 1;
        } else if (a.name.common < b.name.common) {
          return -1;
        } else return 0;
      });
      this.flags = this.setFlags;
    });
  }


  public getSearch(value: string){
    const filter = this.setFlags.filter( (res: DataCountry) => {
      return res.name.common.toLowerCase().includes(value.toLowerCase()) || this.isCurrencyValid(res, value);
    });
    this.flags = filter;
  }

  private isCurrencyValid(data: DataCountry, value:string){
    for(const key in data.currencies){
      if(data.currencies[key].name.toLowerCase().includes(value.toLowerCase())){
        return true
      }

    }
    return false
  }
}
