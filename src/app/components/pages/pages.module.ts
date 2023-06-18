import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { FlagComponent } from './flag/flag.component';
import { ErrorComponent } from './error/error.component';
import { SharedModule } from "../shared/shared.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
    declarations: [
        HomeComponent,
        FlagComponent,
        ErrorComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        SharedModule,
        FontAwesomeModule
    ]
})
export class PagesModule { }
