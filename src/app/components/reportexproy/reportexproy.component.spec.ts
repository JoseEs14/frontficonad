import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportexproyComponent } from './reportexproy.component';

describe('ReportexproyComponent', () => {
  let component: ReportexproyComponent;
  let fixture: ComponentFixture<ReportexproyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportexproyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportexproyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
