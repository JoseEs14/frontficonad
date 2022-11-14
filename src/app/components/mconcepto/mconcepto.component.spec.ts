import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MconceptoComponent } from './mconcepto.component';

describe('MconceptoComponent', () => {
  let component: MconceptoComponent;
  let fixture: ComponentFixture<MconceptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MconceptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MconceptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
