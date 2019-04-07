import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { KbbHomeComponent } from './kbb-home/kbb-home.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes:Routes = [
  { path:'home', component:KbbHomeComponent },
  { path:'cars', component:CarsComponent },
  { path:'admin', component:AdminComponent },
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{ path: '**', component: KbbHomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    KbbHomeComponent,
    CarsComponent,
    CarDetailsComponent,
    AdminComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
