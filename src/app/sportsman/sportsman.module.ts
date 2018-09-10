import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsmanService } from './sportsman.service';
import { SportsmanListComponent } from './sportsman-list/sportsman-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        SportsmanListComponent
    ],
    providers: [SportsmanService],
    bootstrap: [SportsmanListComponent]
})
export class SportsmanModule {}