import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportexconComponent } from './reportexcon.component';

describe('ReportexconComponent', () => {
  let component: ReportexconComponent;
  let fixture: ComponentFixture<ReportexconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportexconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportexconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
