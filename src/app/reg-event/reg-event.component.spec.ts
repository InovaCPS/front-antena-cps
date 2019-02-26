import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEventComponent } from './reg-event.component';

describe('RegEventComponent', () => {
  let component: RegEventComponent;
  let fixture: ComponentFixture<RegEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
