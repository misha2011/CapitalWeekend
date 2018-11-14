import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalsListComponent } from './capitals-list/capitals-list.component';
import { AddSityComponent } from './add-sity/add-sity.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { CapitalComponent } from './capitals-list/capital/capital.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { AddCapitalComponent } from './modals';
import { ReactiveFormsModule } from '@angular/forms';
import { SityNameValidator } from './validators/sityName.validator';

@NgModule({
  declarations: [
    AppComponent,
    CapitalsListComponent,
    AddSityComponent,
    CapitalComponent,
    AddCapitalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SimpleModalModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    AddCapitalComponent,
  ],
  providers: [WeatherService, SityNameValidator],
  bootstrap: [AppComponent]
})
export class AppModule { }
