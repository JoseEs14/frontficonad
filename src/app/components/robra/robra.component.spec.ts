import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobraComponent } from './robra.component';

describe('RobraComponent', () => {
  let component: RobraComponent;
  let fixture: ComponentFixture<RobraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
