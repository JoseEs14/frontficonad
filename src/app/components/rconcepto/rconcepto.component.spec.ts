import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RconceptoComponent } from './rconcepto.component';

describe('RconceptoComponent', () => {
  let component: RconceptoComponent;
  let fixture: ComponentFixture<RconceptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RconceptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RconceptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
