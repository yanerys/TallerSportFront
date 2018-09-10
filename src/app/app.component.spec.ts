import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SportListComponent } from './sport/sport-list/sport-list.component';
import { SportsmanListComponent } from './sportsman/sportsman-list/sportsman-list.component';


describe('AppComponent', () => {
  let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule],
      declarations: [
        AppComponent,SportListComponent,SportsmanListComponent
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'Sports'`, async(() => {    
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Sports');
  }));

  it('should render titles in the navbar', async(() => {    
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#sportsTag').textContent).toContain('Sports');
    expect(compiled.querySelector('#sportsmanTag').textContent).toContain('Sportspeople');    
  }));
});
