import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BokerFormComponent } from './broker-form.component';

describe('BokerFormComponent', () => {
  let component: BokerFormComponent;
  let fixture: ComponentFixture<BokerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BokerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BokerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
