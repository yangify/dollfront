import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlCardComponent } from './url-card.component';

describe('UrlCardComponent', () => {
  let component: UrlCardComponent;
  let fixture: ComponentFixture<UrlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
