import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalNavBarComponent } from './additional-nav-bar.component';

describe('AdditionalNavBarComponent', () => {
  let component: AdditionalNavBarComponent;
  let fixture: ComponentFixture<AdditionalNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
