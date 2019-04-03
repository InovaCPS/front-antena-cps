import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RePasswordComponent } from './re-password.component';

describe('RePasswordComponent', () => {
  let component: RePasswordComponent;
  let fixture: ComponentFixture<RePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
