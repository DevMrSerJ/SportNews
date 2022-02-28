import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsStatisticsComponent } from './clubs-statistics.component';

describe('ClubsStatisticsComponent', () => {
  let component: ClubsStatisticsComponent;
  let fixture: ComponentFixture<ClubsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubsStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
