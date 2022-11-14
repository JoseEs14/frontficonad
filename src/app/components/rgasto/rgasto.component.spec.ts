import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgastoComponent } from './rgasto.component';

describe('RgastoComponent', () => {
  let component: RgastoComponent;
  let fixture: ComponentFixture<RgastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgastoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
