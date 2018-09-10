import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { SportModule } from './sport/sport.module';
import { SportsmanModule } from './sportsman/sportsman.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SportModule,
    SportsmanModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
