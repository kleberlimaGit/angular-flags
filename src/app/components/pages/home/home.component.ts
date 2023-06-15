import { Component, OnInit } from '@angular/core';
import { FlagServiceService } from 'src/app/services/flag-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public flags:any = []
  
  constructor(private flagService: FlagServiceService){
  }
  ngOnInit(): void {
    this.flags = this.flagService.findFlags();
    console.log(this.flags)
  }

}
