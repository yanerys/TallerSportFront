import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportService } from './sport.service';
import { SportListComponent } from './sport-list/sport-list.component';
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
        SportListComponent
    ],
    providers: [SportService],
    bootstrap: [SportListComponent]
})
export class SportModule {}
