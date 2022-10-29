import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsaleComponent } from './onsale.component';

describe('OnsaleComponent', () => {
  let component: OnsaleComponent;
  let fixture: ComponentFixture<OnsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnsaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
