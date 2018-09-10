import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../routing-module/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { SportListComponent } from './sport-list.component';
import { SportService } from '../sport.service';
import { Sport } from '../sport';

describe('SportListComponent', () => {
  let component: SportListComponent;
  let fixture: ComponentFixture<SportListComponent>;
  const sports: Sport[] = require('../../../assets/sports.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [],
      providers: [{ provide: APP_BASE_HREF, useValue: '' }, SportService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of sports', () => {
    component.sports = sports;
    expect(component.sports.length).toEqual(sports.length);
});

it('a sport should be a sports (first and last)', () => {
    component.sports = sports;
    //revisar todos los deportes
    expect(component.sports[0].name).toEqual(sports[0].name);
    expect(component.sports[sports.length - 1].name).toEqual(sports[sports.length - 1].name);
});
});
