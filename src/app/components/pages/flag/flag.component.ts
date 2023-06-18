import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataCountry } from 'src/app/model/data-country';
import { FlagService } from 'src/app/services/flag-service.service';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit{
  formatNumber = new Intl.NumberFormat('pt-BR')

  public flag: Partial<DataCountry> = {};
  constructor(private service: FlagService,  private activevedRouter: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.findByFlagName();
  }

  public findByFlagName(){
    const name = this.activevedRouter.snapshot.params['flagName']
    this.service.findFlagByName(name).subscribe({
      next: (res:DataCountry[]) => {this.flag =  res[0]},
      error: (res: Error) => this.router.navigate(['404'])
    })
}

}
