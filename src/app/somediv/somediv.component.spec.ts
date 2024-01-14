import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomedivComponent } from './somediv.component';

describe('SomedivComponent', () => {
  let component: SomedivComponent;
  let fixture: ComponentFixture<SomedivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomedivComponent]
    });
    fixture = TestBed.createComponent(SomedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
