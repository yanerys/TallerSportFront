import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../routing-module/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { SportsmanListComponent } from './sportsman-list.component';
import { SportsmanService } from '../sportsman.service';
import { Sportsman } from '../sportsman';

describe('SportsmanListComponent', () => {
  let component: SportsmanListComponent;
  let fixture: ComponentFixture<SportsmanListComponent>;
  const sportspeople: Sportsman[] = require('../../../assets/sportspeople.json');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '' }, SportsmanService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsmanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of sportspeople', () => {
    component.sportspeople = sportspeople;
    expect(component.sportspeople.length).toEqual(sportspeople.length);
});

it('an author should be an sportsman (first and last)', () => {
    component.sportspeople = sportspeople;
    expect(component.sportspeople[0].birthDate).toEqual(sportspeople[0].birthDate);
    expect(component.sportspeople[sportspeople.length - 1].birthDate).toEqual(sportspeople[sportspeople.length - 1].birthDate);
});
});
