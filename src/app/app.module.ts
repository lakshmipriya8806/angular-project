import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from "./country/country.component";

const appRoutes: Routes = [
  {
    path: 'country',
    component: CountryComponent
  },
  {
    path: '',
    redirectTo: '/country',
    pathMatch: 'full'
  },
  { path: '**', component: CountryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
