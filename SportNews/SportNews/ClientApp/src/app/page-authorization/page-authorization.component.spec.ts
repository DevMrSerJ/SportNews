import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAuthorizationComponent } from './page-authorization.component';

describe('PageAuthorizationComponent', () => {
  let component: PageAuthorizationComponent;
  let fixture: ComponentFixture<PageAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
