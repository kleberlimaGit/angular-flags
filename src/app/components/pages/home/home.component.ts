import { Component, OnInit } from '@angular/core';
import { DataCountry } from 'src/app/model/data-country';
import { FlagService } from 'src/app/services/flag-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public flags: DataCountry[] = [];

  constructor(private flagService: FlagService) {}
  ngOnInit(): void {
    this.flagService.findFlags().subscribe((data: DataCountry[]) => {
      this.flags = data.sort((a: DataCountry, b: DataCountry) => {
        if (a.name.common > b.name.common) {
          return 1;
        } else if (a.name.common < b.name.common) {
          return -1;
        } else return 0;
      });
      console.log(this.flags);
    });
  }
}
