import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { FlagComponent } from './flag/flag.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    HomeComponent,
    FlagComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
