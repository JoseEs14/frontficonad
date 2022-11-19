import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgastoComponent } from './mgasto.component';

describe('MgastoComponent', () => {
  let component: MgastoComponent;
  let fixture: ComponentFixture<MgastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgastoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
