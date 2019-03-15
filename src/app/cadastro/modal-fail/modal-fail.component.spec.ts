import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFailComponent } from './modal-fail.component';

describe('ModalFailComponent', () => {
  let component: ModalFailComponent;
  let fixture: ComponentFixture<ModalFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
