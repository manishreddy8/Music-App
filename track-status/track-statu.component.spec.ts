import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackStatuComponent } from './track-statu.component';

describe('TrackStatuComponent', () => {
  let component: TrackStatuComponent;
  let fixture: ComponentFixture<TrackStatuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackStatuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackStatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
