import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ], 
  exports: [
    SearchComponent
  ]
})
export class SharedModule { }
