import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalsListComponent } from './capitals-list/capitals-list.component';
import { FilterComponent } from './filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { CapitalComponent } from './capitals-list/capital/capital.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { AddCapitalComponent } from './modals';

@NgModule({
  declarations: [
    AppComponent,
    CapitalsListComponent,
    FilterComponent,
    CapitalComponent,
    AddCapitalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SimpleModalModule,
  ],
  entryComponents: [
    AddCapitalComponent,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
