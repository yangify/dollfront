import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApkCardComponent } from './apk-card.component';

describe('ApkCardComponent', () => {
  let component: ApkCardComponent;
  let fixture: ComponentFixture<ApkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApkCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
